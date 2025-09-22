import React, { useState } from 'react';
import { watchlistdata } from '../data/data';
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import Grow from '@mui/material/Grow';
import BuyActionWindow from './BuyActionWindow'; // ✅ import your popup
import { DoughnutChart } from './DoughnutChart';



const labels = watchlistdata.map((subArray) => subArray["name"]);

const WatchList = () => {

  const data = {
    labels, 
    datasets: [
    {
      label: 'Price',
      data: watchlistdata.map((stock) => stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
  };


  // export const data = {
  // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  // datasets: [
  //   {
  //     label: '# of Votes',
  //     data: [12, 19, 3, 5, 2, 3],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(255, 206, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(255, 159, 64, 0.2)',
  //     ],
  //     borderColor: [
  //       'rgba(255, 99, 132, 1)',
  //       'rgba(54, 162, 235, 1)',
  //       'rgba(255, 206, 86, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(153, 102, 255, 1)',
  //       'rgba(255, 159, 64, 1)',
  //     ],
  //     borderWidth: 1,
  //   },
  // ],
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlistdata.length} / 50</span>
      </div>

      <ul className="list">
        {watchlistdata.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
          <DoughnutChart data={data} /> 
             </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  // ✅ state for Buy/Sell popup
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(""); // "BUY" or "SELL"

  const handleAction = (type) => {
    setPopupType(type);
    setShowPopup(true);
  };

 

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && (
        <WatchListActions uid={stock.name} onAction={handleAction} />
      )}

      {/* ✅ Popup for Buy/Sell */}
      {showPopup && (
        <BuyActionWindow
          uid={stock.name}
          type={popupType}
          onClose={() => setShowPopup(false)}
        />
      )}
    </li>
  );
};

const WatchListActions = ({ uid, onAction }) => {
  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy" onClick={() => onAction("BUY")}>
            Buy
          </button>
        </Tooltip>

        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell" onClick={() => onAction("SELL")}>
            Sell
          </button>
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
    </span>
  );
};


