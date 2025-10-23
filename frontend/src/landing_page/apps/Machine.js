import React from 'react';

export default function Machine() {
  const styles = `
    :root {
      --bg: #f9fafb;
      --accent: #1d4ed8;
      --card: #ffffff;
      --muted: #4b5563;
      --shadow: rgba(29,78,216,0.2);
    }
    .machine-container {
      max-width: 960px;
      margin: 40px auto;
      padding: 20px;
      font-family: 'Segoe UI', Roboto, sans-serif;
      color: #111827;
    }
    .machine-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .machine-header h1 {
      color: var(--accent);
      font-size: 2rem;
      animation: fadeIn 1s ease-in-out;
    }
    .machine-section {
      background: var(--card);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 10px 25px var(--shadow);
      transition: transform 0.3s, box-shadow 0.3s;
      animation: slideUp 0.8s ease forwards;
    }
    .machine-section:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 36px var(--shadow);
    }
    .machine-section h3 {
      color: var(--accent);
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    .machine-section p {
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
    <div className="machine-container">
      <style>{styles}</style>

      <div className="machine-header">
        <h1>Machine Learning in TradeEasy</h1>
        <p>Discover how our ML-powered platform reduces user effort and improves trading efficiency compared to others.</p>
      </div>

      <div className="machine-section">
        <h3>Reducing User Effort</h3>
        <p>Machine Learning automates data analysis and stock prediction, saving users countless hours of research. Instead of manually tracking hundreds of stocks and market trends, our models provide actionable insights and recommendations, making decision-making faster and more accurate.</p>
      </div>

      <div className="machine-section">
        <h3>Advantages Over Other Platforms</h3>
        <p>TradeEasy leverages historical stock data and advanced ML algorithms to predict market trends, giving users an edge over competitors. Our platform is designed to be intuitive, reliable, and focused on reducing brokerage costs, making it more user-friendly and cost-effective than traditional trading platforms.</p>
      </div>

      <div className="machine-section">
        <h3>Key Features of ML in TradeEasy</h3>
        <p>- Accurate short-term and long-term stock predictions.<br />
           - Personalized alerts for price changes and trading opportunities.<br />
           - Automated analysis of market patterns and trends.<br />
           - Minimizes human error and emotional trading decisions.<br />
           - Enhances portfolio management with data-driven insights.</p>
      </div>

      <div className="machine-section">
        <h3>Real-Life Impact</h3>
        <p>For example, our ML model trained on Apple stock data can predict potential intraday highs and lows. A trader can act on these insights to maximize profits while minimizing risk, all without spending hours on manual research. This makes trading faster, smarter, and more reliable.</p>
      </div>

    </div>
  );
}