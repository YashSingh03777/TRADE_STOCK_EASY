// import React, {useState, useEffect} from "react";
// import axios from "axios";

// // import { positions } from "../data/data";

// const Positions = () => {

//   const [allPositions, setAllPositions] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3002/allPositions").then((res) =>{
//       setAllPositions(res.data);
//     })
//   }, []);
//   return (
//     <>
//       <h3 className="title">Positions ({allPositions.length})</h3>

//       <div className="order-table">
//         <table>
//           <tr>
//             <th>Product</th>
//             <th>Instrument</th>
//             <th>Qty.</th>
//             <th>Avg.</th>
//             <th>LTP</th>
//             <th>P&L</th>
//             <th>Chg.</th>
//           </tr>


//           {allPositions.map((stock, index) => {
//             const curValue = stock.price * stock.qty;
//             const isProfit = curValue - stock.avg * stock.qty >= 0.0;
//             const profClass = isProfit ? "profit" : "loss";
//             const dayClass = stock.isLoss ? "loss" : "profit";

//             return (
//               <tr key={index}>
//                 <td>{stock.product}</td>
//                 <td>{stock.name}</td>
//                 <td>{stock.qty}</td>
//                 <td>{stock.avg.toFixed(2)}</td>
//                 <td>{stock.price.toFixed(2)}</td>
//                 <td className={profClass}>
//                   {(curValue - stock.avg * stock.qty).toFixed(2)}
//                 </td>
//                 <td className={dayClass}>{stock.day}</td>
//               </tr>
//             );
//           })}
//         </table>
//       </div>
//     </>
//   );
// };

// export default Positions;




// Positions.js
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const REFRESH_INTERVAL = 30000; // Every 30 seconds
const HIGHLIGHT_DURATION = 3000;

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [autoSellTargets, setAutoSellTargets] = useState({});
  const [lastUpdated, setLastUpdated] = useState(null);
  const [highlightedRows, setHighlightedRows] = useState({});
  const prevPricesRef = useRef({});

  const fetchPositions = async () => {
    try {
      const res = await axios.get("http://localhost:3002/allPositions");
      const backendPositions = res.data;

      const liveMap = window.livePriceMap || {};
      const updatedPositions = backendPositions.map((pos) => {
        const livePrice = liveMap[pos.name];
        return {
          ...pos,
          price: livePrice || pos.price,
        };
      });

      const newHighlights = {};
      updatedPositions.forEach((pos) => {
        const prev = prevPricesRef.current[pos.name];
        if (prev !== undefined && prev !== pos.price) {
          newHighlights[pos.name] = true;
        }
        prevPricesRef.current[pos.name] = pos.price;
      });

      setAllPositions(updatedPositions);
      setLastUpdated(new Date());
      setHighlightedRows(newHighlights);

      if (Object.keys(newHighlights).length > 0) {
        setTimeout(() => setHighlightedRows({}), HIGHLIGHT_DURATION);
      }
    } catch (err) {
      console.error("Error loading positions:", err);
    }
  };

  useEffect(() => {
    fetchPositions();
    const intervalId = setInterval(fetchPositions, REFRESH_INTERVAL);
    return () => clearInterval(intervalId);
  }, []);

  const notifyBackendAutoSell = async (stock) => {
    try {
      await axios.post("http://localhost:3002/autoSellTrigger", {
        name: stock.name,
        targetPrice: autoSellTargets[stock.name],
        currentPrice: stock.price,
        qty: stock.qty,
      });
      console.log("Auto-sell triggered for:", stock.name);
    } catch (error) {
      console.error("Auto-sell backend error:", error);
    }
  };

  const formatTimestamp = (date) =>
    date?.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 className="title">Positions ({allPositions.length})</h3>
        {lastUpdated && (
          <p style={{ fontSize: "14px", color: "#666" }}>
            ⏱ Last updated at: <strong>{formatTimestamp(lastUpdated)}</strong>
          </p>
        )}
      </div>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
              <th>Auto Sell Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              const target = parseFloat(autoSellTargets[stock.name]);
              const shouldAutoSell = !isNaN(target) && stock.price <= target;

              if (shouldAutoSell && !stock.notified) {
                notifyBackendAutoSell(stock);
                stock.notified = true;
              }

              return (
                <tr
                  key={index}
                  className={highlightedRows[stock.name] ? "highlight" : ""}
                >
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                  <td>
                    <input
                      type="number"
                      value={autoSellTargets[stock.name] || ""}
                      placeholder="e.g. 90"
                      onChange={(e) =>
                        setAutoSellTargets({
                          ...autoSellTargets,
                          [stock.name]: e.target.value,
                        })
                      }
                      style={{ width: "80px" }}
                    />
                  </td>
                  <td>
                    {shouldAutoSell ? (
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        Auto-Sell Triggered
                      </span>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <style>
        {`
          .highlight {
            animation: highlightFlash 3s ease forwards;
          }
          @keyframes highlightFlash {
            0% { background-color: #ffff99; }
            100% { background-color: transparent; }
          }
        `}
      </style>
    </>
  );
};

export default Positions;
