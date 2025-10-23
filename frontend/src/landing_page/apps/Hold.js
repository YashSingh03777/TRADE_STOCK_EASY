import React from 'react';

export default function Hold() {
  const styles = `
    :root {
      --bg: #f9fafb;
      --accent: #1d4ed8;
      --card: #ffffff;
      --muted: #4b5563;
      --shadow: rgba(29,78,216,0.2);
    }
    .hold-container {
      max-width: 960px;
      margin: 40px auto;
      padding: 20px;
      font-family: 'Segoe UI', Roboto, sans-serif;
      color: #111827;
    }
    .hold-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .hold-header h1 {
      color: var(--accent);
      font-size: 2rem;
      animation: fadeIn 1s ease-in-out;
    }
    .hold-section {
      background: var(--card);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 10px 25px var(--shadow);
      transition: transform 0.3s, box-shadow 0.3s;
      animation: slideUp 0.8s ease forwards;
    }
    .hold-section:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 36px var(--shadow);
    }
    .hold-section h3 {
      color: var(--accent);
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    .hold-section p {
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
    <div className="hold-container">
      <style>{styles}</style>

      <div className="hold-header">
        <h1>Holdings</h1>
        <p>The Holdings section shows the stocks that the user currently owns and tracks their status in the market.</p>
      </div>

      <div className="hold-section">
        <h3>Understanding Holdings</h3>
        <p>When a user buys a stock, it is added to their holdings. This section keeps a real-time record of all owned stocks and their quantities. It is directly linked to the Orders section on the dashboard, updating whenever a buy or sell order is executed. This allows users to monitor their portfolio and track performance efficiently.</p>
      </div>

      <div className="hold-section">
        <h3>Example</h3>
        <p>Suppose a user buys 10 shares of a stock at ₹100 each. These shares will appear in the Holdings section. If the user later places a sell order for 5 shares at ₹110, the Holdings section will automatically update to show 5 remaining shares, and the Orders section will reflect the executed transaction. This keeps the portfolio information accurate and transparent for the user.</p>
      </div>

      <div className="hold-section">
        <h3>Benefits</h3>
        <p>By maintaining an updated Holdings section, users can easily track their investments, see gains or losses, and make informed trading decisions. It provides a clear view of owned stocks, improving user experience and portfolio management.</p>
      </div>

    </div>
  );
}