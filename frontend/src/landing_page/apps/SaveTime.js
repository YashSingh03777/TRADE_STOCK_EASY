import React from 'react';

export default function SaveTime() {
  const styles = `
    :root {
      --bg: #f9fafb;
      --accent: #1d4ed8;
      --card: #ffffff;
      --muted: #4b5563;
      --shadow: rgba(29,78,216,0.2);
    }
    .savetime-container {
      max-width: 960px;
      margin: 40px auto;
      padding: 20px;
      font-family: 'Segoe UI', Roboto, sans-serif;
      color: #111827;
    }
    .savetime-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .savetime-header h1 {
      color: var(--accent);
      font-size: 2rem;
      animation: fadeIn 1s ease-in-out;
    }
    .savetime-section {
      background: var(--card);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 10px 25px var(--shadow);
      transition: transform 0.3s, box-shadow 0.3s;
      animation: slideUp 0.8s ease forwards;
    }
    .savetime-section:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 36px var(--shadow);
    }
    .savetime-section h3 {
      color: var(--accent);
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    .savetime-section p {
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
    <div className="savetime-container">
      <style>{styles}</style>

      <div className="savetime-header">
        <h1>Saving Time with TradeEasy</h1>
        <p>Discover how our platform streamlines trading to save users time at every stage compared to other platforms.</p>
      </div>

      <div className="savetime-section">
        <h3>Quick Account Setup</h3>
        <p>TradeEasy enables instant account creation and verification using minimal documentation. Unlike other platforms that require long verification processes, users can start trading immediately, saving hours or even days.</p>
      </div>

      <div className="savetime-section">
        <h3>Automated Stock Recommendations</h3>
        <p>Our ML-driven engine analyzes historical and real-time market data to suggest stocks, entry, and exit points automatically. Users no longer spend hours manually researching stock trends.</p>
      </div>

      <div className="savetime-section">
        <h3>Real-Time Alerts & Notifications</h3>
        <p>TradeEasy sends instant alerts for price changes, margin levels, and market news. Users can act quickly without continuously monitoring the market, saving significant time.</p>
      </div>

      <div className="savetime-section">
        <h3>Integrated Dashboard</h3>
        <p>All account information, portfolio status, holdings, and predictions are accessible in one unified dashboard. This reduces the need to navigate multiple pages or platforms, providing efficiency and clarity.</p>
      </div>

      <div className="savetime-section">
        <h3>Faster Execution</h3>
        <p>Our platform optimizes trade execution speed, ensuring orders are placed faster than traditional brokers. Quick execution reduces missed opportunities and maximizes profits for users.</p>
      </div>

      <div className="savetime-section">
        <h3>Why We Are Better</h3>
        <p>Compared to other trading platforms, TradeEasy focuses on automation, ML-driven insights, and streamlined interfaces. By reducing manual intervention at each stage, we provide a faster, smarter, and more reliable trading experience.</p>
      </div>

    </div>
  );
}