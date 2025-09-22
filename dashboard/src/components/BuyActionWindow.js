import React, { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, type, onClose }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleActionClick = async () => {
    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: type, // "BUY" or "SELL"
      });

      onClose(); // Close popup after successful order
    } catch (err) {
      console.error("Order failed:", err);
    }
  };

  return (
    <div className="popup-overlay" draggable="true">
      <div className="popup-window">
        <h2>{type} Stock</h2>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>

        <div className="buttons">
          <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
          <div>
            <Link className="btn btn-blue" onClick={handleActionClick}>
              {type}
            </Link>
            <Link to="" className="btn btn-grey" onClick={onClose}>
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
