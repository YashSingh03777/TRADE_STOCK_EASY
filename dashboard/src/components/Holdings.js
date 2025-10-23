// import React, {useState, useEffect} from "react";
// import axios from 'axios';
// import { VerticalGraph } from "./VerticalGraph";

// // import { holdings } from "../data/data";     


// const Holdings = () => {

//   const [allHoldings, setAllHoldings] = useState([]);

//   useEffect(() => {
//       axios.get("http://localhost:3002/allHoldings").then((res) => {
//         console.log(res.data);
//         setAllHoldings(res.data);
//       })
//   }, []);

//   // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//     const labels = allHoldings.map((stock)=>stock.name);


//     const data = {
//       labels,
//        datasets: [
//     {
//        label: 'Stock Prices',
//        data: allHoldings.map((stock) => stock.price),
//        backgroundColor: 'rgba(255, 99, 132, 0.5)',
//      },
//     ]
//     };

// // export const data = {
// //   labels,
// //   datasets: [
// //     {
// //       label: 'Dataset 1',
// //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
// //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
// //     },
// //     {
// //       label: 'Dataset 2',
// //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
// //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
// //     },
// //   ],
// // };

//   return (
//     <>
//       <h3 className="title">Holdings ({allHoldings.length})</h3> 

//       <div className="order-table">
//         <table>
//           <tr>
//             <th>Instrument</th>
//             <th>Qty.</th>
//             <th>Avg. cost</th>
//             <th>LTP</th>
//             <th>Cur. val</th>
//             <th>P&L</th>
//             <th>Net chg.</th>
//             <th>Day chg.</th>
//           </tr>

//           {allHoldings.map((stock, index) => {
//              const curValue = stock.price * stock.qty;
//             const isProfit = curValue - stock.avg * stock.qty >= 0.0;
//             const profClass = isProfit ? "profit" : "loss";
//             const dayClass = stock.isLoss ? "loss" : "profit";
           

//             return (
//               <tr key={index} >
//                 <td>{stock.name}</td>

//                 <td>{stock.qty}</td>
//                 <td>{stock.avg.toFixed(2)}</td>
//                 <td>{stock.price.toFixed(2)}</td>
//                 <td>{curValue.toFixed(2)}</td>
//                 <td className={profClass}>
//                   {(curValue - stock.avg * stock.qty).toFixed(2)}
//                 </td>
//                 <td className={profClass}>{stock.net}</td>
//                 <td className={dayClass}>{stock.day}</td>
//               </tr>
//             );
//           })}
//         </table>
//       </div>

//       <div className="row">
//         <div className="col">
//           <h5>
//             29,875.<span>55</span>{" "}
//           </h5>
//           <p>Total investment</p>
//         </div>
//         <div className="col">
//           <h5>
//             31,428.<span>95</span>{" "}
//           </h5>
//           <p>Current value</p>
//         </div>
//         <div className="col">
//           <h5>1,553.40 (+5.20%)</h5>
//           <p>P&L</p>
//         </div>
//       </div>

//       <VerticalGraph data={data}/>
    
//     </>
//   );
// };

// export default Holdings;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [intradayData, setIntradayData] = useState({});
  const [loadingChart, setLoadingChart] = useState(true);

  // ---------------- Fetch all holdings ----------------
  const fetchHoldings = async () => {
    try {
      const res = await axios.get("http://localhost:3002/api/holdings/live");
      setAllHoldings(res.data);

      // Fetch intraday for first stock
      if (res.data.length > 0) {
        const firstSymbol = res.data[0].name;
        fetchIntraday(firstSymbol);
      } else {
        setLoadingChart(false);
      }
    } catch (err) {
      console.error("Holdings fetch error:", err);
      setLoadingChart(false);
    }
  };

  // ---------------- Fetch intraday ----------------
  const fetchIntraday = async (symbol) => {
    try {
      const resp = await axios.get(
        `http://localhost:3002/api/intraday?symbol=${symbol}&interval=5min`
      );
      const ts = resp.data.normalizedTimeSeries || resp.data["Time Series (5min)"] || {};
      setIntradayData(ts);
      setLoadingChart(false);
    } catch (err) {
      console.error("Intraday fetch error:", err);
      setLoadingChart(false);
    }
  };

  useEffect(() => {
    fetchHoldings();
  }, []);

  // ---------------- Buy/Sell updates ----------------
  const handleBuy = async (stock) => {
  try {
    await axios.post("http://localhost:3002/api/buy", {
      symbol: stock.name,
      qty: 1,
    });
    fetchHoldings(); // refresh after buy
  } catch (err) {
    console.error("Buy error:", err.response?.data || err.message);
    alert(err.response?.data?.error || "Buy failed");
  }
};

const handleSell = async (stock) => {
  try {
    await axios.post("http://localhost:3002/api/sell", {
      symbol: stock.name,
      qty: 1,
    });
    fetchHoldings(); // refresh after sell
  } catch (err) {
    console.error("Sell error:", err.response?.data || err.message);
    alert(err.response?.data?.error || "Sell failed");
  }
};


  // ---------------- Chart Data ----------------
  const chartData = () => {
    if (intradayData && Object.keys(intradayData).length > 0) {
      const labels = Object.keys(intradayData);
      const data = Object.values(intradayData).map((item) => parseFloat(item["4. close"]));
      return {
        labels,
        datasets: [
          {
            label: `${allHoldings[0]?.name} Intraday Price`,
            data,
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      };
    } else {
      const labels = allHoldings.map((stock) => stock.name);
      return {
        labels,
        datasets: [
          {
            label: "Stock Prices",
            data: allHoldings.map((stock) => stock.price),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      };
    }
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                  <td>
                    <button onClick={() => handleBuy(stock)}>Buy</button>
                    <button onClick={() => handleSell(stock)}>Sell</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {!loadingChart && <VerticalGraph data={chartData()} />}
    </>
  );
};

export default Holdings;
