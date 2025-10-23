import React from 'react';

export default function WhyWe() {
  const styles = `
    :root {
      --bg: linear-gradient(135deg, #e0f7fa, #ffe0b2);
      --accent: #ff5722;
      --card: #ffffff;
      --muted: #4b5563;
      --shadow: rgba(255,87,34,0.25);
    }
    .whywe-container {
      max-width: 980px;
      margin: 40px auto;
      padding: 30px;
      font-family: 'Poppins', sans-serif;
      background: var(--bg);
      color: #1f2937;
      border-radius: 20px;
      box-shadow: 0 12px 30px var(--shadow);
    }
    .whywe-header {
      text-align: center;
      margin-bottom: 40px;
      animation: headerFade 1s ease-in-out;
    }
    .whywe-header h1 {
      font-size: 2.4rem;
      color: var(--accent);
      margin-bottom: 12px;
    }
    .whywe-section {
      background: var(--card);
      border-left: 8px solid var(--accent);
      padding: 22px;
      margin-bottom: 25px;
      box-shadow: 0 14px 32px var(--shadow);
      transition: transform 0.3s, box-shadow 0.3s;
      border-radius: 12px;
    }
    .whywe-section:hover {
      transform: translateX(5px);
      box-shadow: 0 20px 40px var(--shadow);
    }
    .whywe-section h3 {
      color: var(--accent);
      margin-bottom: 10px;
      font-size: 1.4rem;
    }
    .whywe-section p {
      color: var(--muted);
      line-height: 1.8;
      font-size: 1.05rem;
    }

    @keyframes headerFade {
      0% { opacity: 0; transform: translateY(-25px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <div className="whywe-container">
      <style>{styles}</style>

      <div className="whywe-header">
        <h1>Why Choose TradeEasy?</h1>
        <p>TradeEasy combines cutting-edge machine learning, cost efficiency, and a user-friendly interface to deliver an unparalleled trading experience.</p>
      </div>

      <div className="whywe-section">
        <h3>1. Machine Learning Powered Predictions</h3>
        <p>Our ML models analyze historical stock data, news sentiment, and market trends to provide accurate predictions, giving users an edge in making profitable trades with less effort.</p>
      </div>

      <div className="whywe-section">
        <h3>2. Cost Efficiency</h3>
        <p>TradeEasy focuses on minimizing brokerage fees and operational costs through automation and optimized trading strategies, ensuring users keep more of their profits.</p>
      </div>

      <div className="whywe-section">
        <h3>3. Time-Saving at Every Step</h3>
        <p>From instant account setup to real-time alerts, automated recommendations, and a unified dashboard, we save users hours of research and manual monitoring compared to other platforms.</p>
      </div>

      <div className="whywe-section">
        <h3>4. Secure and Authorized Access</h3>
        <p>Only verified users can access critical dashboard features, while unauthorized visitors can explore frontend pages without any risk to sensitive data.</p>
      </div>

      <div className="whywe-section">
        <h3>5. Long-Term and Short-Term Trading Strategies</h3>
        <p>Whether investing your Diwali bonus for long-term gains or performing intraday trades, TradeEasy provides tailored strategies and insights for every trading style.</p>
      </div>

      <div className="whywe-section">
        <h3>6. Friendly and Intuitive Interface</h3>
        <p>We prioritize simplicity and clarity. All essential tools, predictions, and portfolio insights are available in a single, easy-to-navigate dashboard designed for traders of all levels.</p>
      </div>

      <div className="whywe-section">
        <h3>7. Continuous Improvement</h3>
        <p>Our team constantly updates ML models and features to adapt to market changes, ensuring users always have the most reliable tools and data at their disposal.</p>
      </div>

      <div className="whywe-section">
        <h3>8. Personalized Alerts</h3>
        <p>Users receive notifications based on their portfolio preferences and trading patterns, allowing quick action without manually monitoring the market 24/7.</p>
      </div>

    </div>
  );
}