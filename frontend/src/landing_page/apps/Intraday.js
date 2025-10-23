import React from 'react';

export default function Intraday() {
  const styles = `
    :root {
      --bg: #f9fafb;
      --accent: #1d4ed8;
      --card: #ffffff;
      --muted: #4b5563;
      --shadow: rgba(29,78,216,0.2);
    }
    .intraday-container {
      max-width: 960px;
      margin: 40px auto;
      padding: 20px;
      font-family: 'Segoe UI', Roboto, sans-serif;
      color: #111827;
    }
    .intraday-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .intraday-header h1 {
      color: var(--accent);
      font-size: 2rem;
      animation: fadeIn 1s ease-in-out;
    }
    .intraday-section {
      background: var(--card);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 10px 25px var(--shadow);
      transition: transform 0.3s, box-shadow 0.3s;
      animation: slideUp 0.8s ease forwards;
    }
    .intraday-section:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 36px var(--shadow);
    }
    .intraday-section h3 {
      color: var(--accent);
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    .intraday-section p {
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
    <div className="intraday-container">
      <style>{styles}</style>

      <div className="intraday-header">
        <h1>Intraday Trading</h1>
        <p>Learn how intraday trading works, its benefits, risks, and an example using Apple stock.</p>
      </div>

      <div className="intraday-section">
        <h3>What is Intraday Trading?</h3>
        <p>Intraday trading involves buying and selling stocks within the same trading day. Traders aim to profit from short-term price fluctuations without holding the stock overnight. It is one of the most active forms of trading and requires quick decision-making.</p>
      </div>

      <div className="intraday-section">
        <h3>How It Works</h3>
        <p>Traders analyze market trends, technical indicators, and news throughout the trading session. Orders are executed using a trading platform like TradeEasy. Positions are opened and closed on the same day, minimizing overnight risk. Our platform uses machine learning models trained on historical Apple stock data to provide better predictions for intraday trades.</p>
      </div>

      <div className="intraday-section">
        <h3>Advantages</h3>
        <p>- Opportunity to earn profits within a single trading day.<br />
           - No overnight risk since positions are closed before market close.<br />
           - High liquidity and numerous trading opportunities.<br />
           - Can be automated with predictive models for faster decision-making.</p>
      </div>

      <div className="intraday-section">
        <h3>Disadvantages</h3>
        <p>- Requires continuous monitoring and fast execution.<br />
           - High risk due to rapid price fluctuations.<br />
           - Transaction costs may accumulate due to frequent trades.<br />
           - Emotional trading can lead to poor decisions.</p>
      </div>

      <div className="intraday-section">
        <h3>Example: Apple Stock</h3>
        <p>Suppose Apple stock opens at $150. Using our ML model, the platform predicts a potential intraday high of $155 and a low of $148. A trader buys 10 shares at $150 and sells them at $154 when the price rises. The profit is $4 per share, or $40 total. By the end of the day, all positions are closed to avoid overnight risk.</p>
      </div>

    </div>
  );
}