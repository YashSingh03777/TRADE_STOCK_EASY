// import React, { useState } from 'react';
// import { watchlistdata } from '../data/data';
// import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from '@mui/icons-material';
// import Tooltip from '@mui/material/Tooltip';
// import Grow from '@mui/material/Grow';
// import BuyActionWindow from './BuyActionWindow'; // ✅ import your popup
// import { DoughnutChart } from './DoughnutChart';



// const labels = watchlistdata.map((subArray) => subArray["name"]);

// const WatchList = () => {

//   const data = {
//     labels, 
//     datasets: [
//     {
//       label: 'Price',
//       data: watchlistdata.map((stock) => stock.price),
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.5)',
//         'rgba(54, 162, 235, 0.5)',
//         'rgba(255, 206, 86, 0.5)',
//         'rgba(75, 192, 192, 0.5)',
//         'rgba(153, 102, 255, 0.5)',
//         'rgba(255, 159, 64, 0.5)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
//   };


//   // export const data = {
//   // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   // datasets: [
//   //   {
//   //     label: '# of Votes',
//   //     data: [12, 19, 3, 5, 2, 3],
//   //     backgroundColor: [
//   //       'rgba(255, 99, 132, 0.2)',
//   //       'rgba(54, 162, 235, 0.2)',
//   //       'rgba(255, 206, 86, 0.2)',
//   //       'rgba(75, 192, 192, 0.2)',
//   //       'rgba(153, 102, 255, 0.2)',
//   //       'rgba(255, 159, 64, 0.2)',
//   //     ],
//   //     borderColor: [
//   //       'rgba(255, 99, 132, 1)',
//   //       'rgba(54, 162, 235, 1)',
//   //       'rgba(255, 206, 86, 1)',
//   //       'rgba(75, 192, 192, 1)',
//   //       'rgba(153, 102, 255, 1)',
//   //       'rgba(255, 159, 64, 1)',
//   //     ],
//   //     borderWidth: 1,
//   //   },
//   // ],
//   return (
//     <div className="watchlist-container">
//       <div className="search-container">
//         <input
//           type="text"
//           name="search"
//           id="search"
//           placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
//           className="search"
//         />
//         <span className="counts">{watchlistdata.length} / 50</span>
//       </div>

//       <ul className="list">
//         {watchlistdata.map((stock, index) => {
//           return <WatchListItem stock={stock} key={index} />;
//         })}
//       </ul>
//           <DoughnutChart data={data} /> 
//              </div>
//   );
// };

// export default WatchList;

// const WatchListItem = ({ stock }) => {
//   const [showWatchlistActions, setShowWatchlistActions] = useState(false);

//   // ✅ state for Buy/Sell popup
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupType, setPopupType] = useState(""); // "BUY" or "SELL"

//   const handleAction = (type) => {
//     setPopupType(type);
//     setShowPopup(true);
//   };

 

//   return (
//     <li
//       onMouseEnter={() => setShowWatchlistActions(true)}
//       onMouseLeave={() => setShowWatchlistActions(false)}
//     >
//       <div className="item">
//         <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
//         <div className="itemInfo">
//           <span className="percent">{stock.percent}</span>
//           {stock.isDown ? (
//             <KeyboardArrowDown className="down" />
//           ) : (
//             <KeyboardArrowUp className="up" />
//           )}
//           <span className="price">{stock.price}</span>
//         </div>
//       </div>

//       {showWatchlistActions && (
//         <WatchListActions uid={stock.name} onAction={handleAction} />
//       )}

//       {/* ✅ Popup for Buy/Sell */}
//       {showPopup && (
//         <BuyActionWindow
//           uid={stock.name}
//           type={popupType}
//           onClose={() => setShowPopup(false)}
//         />
//       )}
//     </li>
//   );
// };

// const WatchListActions = ({ uid, onAction }) => {
//   return (
//     <span className="actions">
//       <span>
//         <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
//           <button className="buy" onClick={() => onAction("BUY")}>
//             Buy
//           </button>
//         </Tooltip>

//         <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
//           <button className="sell" onClick={() => onAction("SELL")}>
//             Sell
//           </button>
//         </Tooltip>

//         <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
//           <button className="action">
//             <BarChartOutlined className="icon" />
//           </button>
//         </Tooltip>

//         <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
//           <button className="action">
//             <MoreHoriz className="icon" />
//           </button>
//         </Tooltip>
//       </span>
//     </span>
//   );
// };


import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";
import { DoughnutChart } from "./DoughnutChart";

const symbols = ["GOOGL", "MSFT", "INFY", "APPLE", "UBER"];
const API_KEY = "YOUR_ALPHA_VANTAGE_KEY";

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await Promise.all(
          symbols.map(async (symbol) => {
            try {
              // Try intraday first
              let url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;
              let res = await axios.get(url);
              let timeSeries = res.data["Time Series (5min)"];

              if (timeSeries) {
                const latestTime = Object.keys(timeSeries)[0];
                const latestData = timeSeries[latestTime];
                const price = parseFloat(latestData["4. close"]);
                const open = parseFloat(latestData["1. open"]);
                const isDown = price < open;
                const percent = (((price - open) / open) * 100).toFixed(2) + "%";
                return { name: symbol, price, percent, isDown };
              }

              // Fallback: GLOBAL_QUOTE for latest price
              url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
              res = await axios.get(url);
              const quote = res.data["Global Quote"];

              if (quote && quote["05. price"]) {
                const price = parseFloat(quote["05. price"]);
                const open = parseFloat(quote["02. open"] || price);
                const isDown = price < open;
                const percent = (((price - open) / open) * 100).toFixed(2) + "%";
                return { name: symbol, price, percent, isDown };
              }

              // If no data, fallback
              return { name: symbol, price: 100, percent: "0.00%", isDown: false };
            } catch {
              return { name: symbol, price: 100, percent: "0.00%", isDown: false };
            }
          })
        );

        setWatchlist(results);
      } catch (err) {
        console.error("Error fetching stock data:", err);
      }
    };

    fetchData();
  }, []);

  // Chart data
  const chartData = {
    labels: watchlist.map((stock) => stock.name),
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0",
          "#9966FF", "#FF9F40", "#66FF66", "#FF6666"
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          placeholder="Search eg: INFY, WIPRO, TCS"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem key={index} stock={stock} />
        ))}
      </ul>

      <DoughnutChart data={chartData} />
    </div>
  );
};

export default WatchList;

// ------------------ WatchListItem ------------------
const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  const handleBuy = async () => {
    try {
      await axios.post("http://localhost:3002/api/buy", { symbol: stock.name, qty: 1 });
      //  await axios.post(`${BASE_URL}/api/buy`, { symbol: stock.name, qty: 1 });
      alert(`${stock.name} bought successfully!`);
    } catch (err) {
      console.error("Buy error:", err);
      alert("Error buying stock");
    }
  };

  const handleSell = async () => {
    try {
      await axios.post("http://localhost:3002/api/sell", { symbol: stock.name, qty: 1 });
      // await axios.post(`${BASE_URL}/api/sell`, { symbol: stock.name, qty: 1 });
      alert(`${stock.name} sold successfully!`);
    } catch (err) {
      console.error("Sell error:", err);
      alert("Error selling stock");
    }
  };

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? <KeyboardArrowDown className="down" /> : <KeyboardArrowUp className="up" />}
          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showActions && (
        <span className="actions">
          <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
            <button className="buy" onClick={handleBuy}>Buy</button>
          </Tooltip>

          <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
            <button className="sell" onClick={handleSell}>Sell</button>
          </Tooltip>

          <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
            <button className="action">
              <BarChartOutlined className="icon" />
            </button>
          </Tooltip>

          <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
            <button className="action">
              <MoreHoriz className="icon" />
            </button>
          </Tooltip>
        </span>
      )}
    </li>
  );
};
