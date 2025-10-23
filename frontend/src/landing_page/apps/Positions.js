import React from 'react';

export default function Positions() {
  const styles = `
    :root {
      --bg: #f9fafb;
      --accent: #1d4ed8;
      --card: #ffffff;
      --muted: #4b5563;
      --shadow: rgba(29,78,216,0.2);
    }
    .positions-container {
      max-width: 960px;
      margin: 40px auto;
      padding: 20px;
      font-family: 'Segoe UI', Roboto, sans-serif;
      color: #111827;
    }
    .positions-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .positions-header h1 {
      color: var(--accent);
      font-size: 2rem;
      animation: fadeIn 1s ease-in-out;
    }
    .position-section {
      background: var(--card);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 10px 25px var(--shadow);
      transition: transform 0.3s, box-shadow 0.3s;
      animation: slideUp 0.8s ease forwards;
    }
    .position-section:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 36px var(--shadow);
    }
    .position-section h3 {
      color: var(--accent);
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    .position-section p {
      color: var(--muted);
      line-height: 1.6;
    }

    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes slideUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <div className="positions-container">
      <style>{styles}</style>

      <div className="positions-header">
        <h1>Trading Positions</h1>
        <p>The Positions section helps users automate buying or selling stocks at preset target prices.</p>
      </div>

      <div className="position-section">
        <h3>How Positions Work</h3>
        <p>Users can set target prices for their stocks. When the stock reaches the target price, TradeEasy automatically executes the buy or sell order. This helps users manage trades without constantly monitoring the market.</p>
      </div>

      <div className="position-section">
        <h3>Example</h3>
        <p>Suppose you own a stock currently priced at ₹100. You set a sell position at ₹110 and a buy position at ₹90. If the stock price rises to ₹110, TradeEasy automatically sells your stock to secure profit. If the price falls to ₹90, the platform buys the stock at your desired lower price. This ensures you take advantage of price movements efficiently.</p>
      </div>

      <div className="position-section">
        <h3>Benefits of Using Positions</h3>
        <p>Positions help in automated trading, reduce the risk of missing market opportunities, and allow users to plan entry and exit points according to their strategy. It is a useful feature for both beginners and experienced traders.</p>
      </div>

    </div>
  );
}
