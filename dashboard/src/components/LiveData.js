// LiveData.js
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import "./LiveData.css";

const LiveData = () => {
  const [symbol, setSymbol] = useState("IBM");
  const [intradayData, setIntradayData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchIntraday = useCallback(() => {
    if (!symbol) return;
    setLoading(true);

    axios
      .get(`http://localhost:3002/api/intraday?symbol=${symbol}&interval=5min`)
      .then((res) => {
        const ts =
          res.data.normalizedTimeSeries || res.data["Time Series (5min)"] || {};
        const latestTimestamp = Object.keys(ts)[0];
        const latestPrice = parseFloat(ts[latestTimestamp]["4. close"]);

        setIntradayData(ts);
        setLoading(false);

        // Update global live price map
        window.livePriceMap = window.livePriceMap || {};
        window.livePriceMap[symbol] = latestPrice;
      })
      .catch((err) => {
        console.error("Intraday fetch error:", err);
        setLoading(false);
      });
  }, [symbol]);

  useEffect(() => {
    fetchIntraday();
    const intervalId = setInterval(fetchIntraday, 60000); // every minute
    return () => clearInterval(intervalId);
  }, [fetchIntraday]);

  const chartData = () => {
    if (!intradayData || Object.keys(intradayData).length === 0) return {};
    const labels = Object.keys(intradayData).reverse();
    const data = Object.values(intradayData)
      .map((item) => parseFloat(item["4. close"]))
      .reverse();

    return {
      labels,
      datasets: [
        {
          label: `${symbol} Intraday Price`,
          data,
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
  };

  const goToDetails = () => {
    navigate(`/details/${symbol}`);
  };

  return (
    <div className="live-data-container">
      <h3>Live Data / Intraday Chart</h3>

      <div className="symbol-control">
        <input
          type="text"
          placeholder="Enter stock symbol (e.g., IBM)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
        />
        <button onClick={fetchIntraday}>Fetch</button>
        <button className="btn-details" onClick={goToDetails}>
          View Details
        </button>
      </div>

      <div className="chart-wrapper" onClick={goToDetails} style={{ cursor: "pointer" }}>
        {loading ? (
          <p className="loading-text">Loading chart...</p>
        ) : (
          <VerticalGraph data={chartData()} />
        )}
      </div>
    </div>
  );
};

export default LiveData;
