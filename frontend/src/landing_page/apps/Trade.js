import React from 'react';

export default function Trade() {
  const styles = `
    :root {
      --bg: #f9fafb;
      --accent: #1d4ed8;
      --card: #ffffff;
      --muted: #4b5563;
      --shadow: rgba(29,78,216,0.2);
    }
    .trade-container {
      max-width: 960px;
      margin: 40px auto;
      padding: 20px;
      font-family: 'Segoe UI', Roboto, sans-serif;
      color: #111827;
    }
    .trade-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .trade-header h1 {
      color: var(--accent);
      font-size: 2rem;
      animation: fadeIn 1s ease-in-out;
    }
    .trade-section {
      background: var(--card);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 10px 25px var(--shadow);
      transition: transform 0.3s, box-shadow 0.3s;
      animation: slideUp 0.8s ease forwards;
    }
    .trade-section:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 36px var(--shadow);
    }
    .trade-section h3 {
      color: var(--accent);
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    .trade-section p {
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
    <div className="trade-container">
      <style>{styles}</style>

      <div className="trade-header">
        <h1>Trading</h1>
        <p>Learn everything about trading, its fundamentals, benefits, risks, and how it works.</p>
      </div>

      <div className="trade-section">
        <h3>What is Trading?</h3>
        <p>Trading is the act of buying and selling financial instruments like stocks, commodities, currencies, or derivatives in the financial markets. Traders aim to profit from price fluctuations by taking short-term or long-term positions.</p>
      </div>

      <div className="trade-section">
        <h3>Where Does Trading Come From?</h3>
        <p>Trading has been part of human commerce for centuries. Modern trading evolved from physical marketplaces to stock exchanges, where financial instruments are exchanged electronically. It is governed by market regulations to ensure transparency and fairness.</p>
      </div>

      <div className="trade-section">
        <h3>How Trading Works</h3>
        <p>Traders analyze market data, trends, and news to make informed decisions. Orders are placed through brokers on exchanges, and transactions are executed electronically. Traders can use strategies such as day trading, swing trading, or long-term investing to achieve their goals.</p>
      </div>

      <div className="trade-section">
        <h3>Advantages of Trading</h3>
        <p>- Opportunity to earn profits from market fluctuations.<br />
           - Provides liquidity to financial markets.<br />
           - Allows diversification of investment portfolio.<br />
           - Enhances understanding of financial markets and economics.</p>
      </div>

      <div className="trade-section">
        <h3>Disadvantages of Trading</h3>
        <p>- Risk of losses due to market volatility.<br />
           - Requires time, knowledge, and analysis.<br />
           - Emotional decision-making can impact performance.<br />
           - Costs such as brokerage fees can reduce net profit.</p>
      </div>

      <div className="trade-section">
        <h3>Fundamentals of Trading</h3>
        <p>Understanding supply and demand, company financials, economic indicators, and market trends are essential. Traders also use technical analysis, chart patterns, and fundamental analysis to make informed decisions.</p>
      </div>

      <div className="trade-section">
        <h3>Example</h3>
        <p>For instance, if a trader buys 10 shares of a stock at ₹100 each and the price rises to ₹120, they can sell the shares to earn a profit of ₹20 per share. Conversely, if the price falls to ₹90, the trader may incur a loss unless protective strategies are used.</p>
      </div>

    </div>
  );
}