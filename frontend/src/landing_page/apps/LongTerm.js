import React from 'react';

export default function LongTerm() {
  const styles = `
    :root {
      --bg: #f9fafb;
      --accent: #1d4ed8;
      --card: #ffffff;
      --muted: #4b5563;
      --shadow: rgba(29,78,216,0.2);
    }
    .longterm-container {
      max-width: 960px;
      margin: 40px auto;
      padding: 20px;
      font-family: 'Segoe UI', Roboto, sans-serif;
      color: #111827;
    }
    .longterm-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .longterm-header h1 {
      color: var(--accent);
      font-size: 2rem;
      animation: fadeIn 1s ease-in-out;
    }
    .longterm-section {
      background: var(--card);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 10px 25px var(--shadow);
      transition: transform 0.3s, box-shadow 0.3s;
      animation: slideUp 0.8s ease forwards;
    }
    .longterm-section:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 36px var(--shadow);
    }
    .longterm-section h3 {
      color: var(--accent);
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    .longterm-section p {
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
    <div className="longterm-container">
      <style>{styles}</style>

      <div className="longterm-header">
        <h1>Long-Term Trading & Investing</h1>
        <p>Discover the benefits of long-term trading and how TradeEasy can help users invest wisely for the future.</p>
      </div>

      <div className="longterm-section">
        <h3>What is Long-Term Trading?</h3>
        <p>Long-term trading or investing involves holding stocks, mutual funds, or other financial instruments for an extended period, typically years. This strategy focuses on growth, dividends, and compounding over time rather than quick profits.</p>
      </div>

      <div className="longterm-section">
        <h3>Benefits of Long-Term Trading</h3>
        <p>- Reduces the impact of short-term market volatility.<br />
           - Leverages compound growth over time.<br />
           - Provides potential dividends and passive income.<br />
           - Encourages disciplined investment and financial planning.</p>
      </div>

      <div className="longterm-section">
        <h3>Real-Life Example: Diwali Bonus Investment</h3>
        <p>Suppose a user receives a Diwali bonus of ₹50,000. By investing this amount in solid long-term stocks or mutual funds through TradeEasy, the user can hold these investments for 5-10 years. Over time, the investment may grow significantly due to market appreciation, dividends, and compounding, providing a substantial return compared to short-term trading.</p>
      </div>

      <div className="longterm-section">
        <h3>How TradeEasy Helps</h3>
        <p>Our platform provides predictions, insights, and easy portfolio tracking to guide users in making informed long-term investments. It highlights stable growth opportunities, recommends diversified portfolios, and keeps the user updated with market trends to maximize benefits.</p>
      </div>

    </div>
  );
}