import React from 'react';

export default function ReduceML() {
  const styles = `
    :root {
      --bg: #f9fafb;
      --accent: #1d4ed8;
      --card: #ffffff;
      --muted: #4b5563;
      --shadow: rgba(29,78,216,0.2);
    }
    .reduce-container {
      max-width: 960px;
      margin: 40px auto;
      padding: 20px;
      font-family: 'Segoe UI', Roboto, sans-serif;
      color: #111827;
    }
    .reduce-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .reduce-header h1 {
      color: var(--accent);
      font-size: 2rem;
      animation: fadeIn 1s ease-in-out;
    }
    .reduce-section {
      background: var(--card);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 10px 25px var(--shadow);
      transition: transform 0.3s, box-shadow 0.3s;
      animation: slideUp 0.8s ease forwards;
    }
    .reduce-section:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 36px var(--shadow);
    }
    .reduce-section h3 {
      color: var(--accent);
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    .reduce-section p {
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
    <div className="reduce-container">
      <style>{styles}</style>

      <div className="reduce-header">
        <h1>Reducing Costs with Machine Learning</h1>
        <p>Learn how TradeEasy uses ML to minimize costs for users and make the platform more user-friendly.</p>
      </div>

      <div className="reduce-section">
        <h3>Lowering Brokerage and Operational Costs</h3>
        <p>Our ML algorithms optimize trading decisions, reducing unnecessary trades and helping users save on brokerage fees. Automated predictions and alerts ensure users make profitable trades with minimal effort, lowering operational costs for everyone.</p>
      </div>

      <div className="reduce-section">
        <h3>User-Friendly Automation</h3>
        <p>By leveraging machine learning, users receive insights and recommendations without constant monitoring or manual analysis. This makes the trading experience intuitive and approachable, even for beginners.</p>
      </div>

      <div className="reduce-section">
        <h3>No Direct Intervention Initially</h3>
        <p>At the early stages, we respect user privacy and do not visit or contact them. Users can freely explore the platform, experiment with ML-driven insights, and build confidence before any interaction is initiated.</p>
      </div>

      <div className="reduce-section">
        <h3>Long-Term Benefits</h3>
        <p>Over time, ML helps users consistently make smarter trades, maximizing profits while keeping costs lower than traditional platforms. The automation and predictive features create a seamless, efficient, and cost-effective trading experience.</p>
      </div>

    </div>
  );
}
