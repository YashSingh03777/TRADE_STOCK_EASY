import React from 'react';

export default function Documentation() {
  const styles = `
    :root {
      --bg: #f9fafb;
      --accent: #1d4ed8;
      --card: #ffffff;
      --muted: #4b5563;
      --shadow: rgba(29,78,216,0.2);
    }
    .doc-container {
      max-width: 900px;
      margin: 40px auto;
      padding: 20px;
      font-family: 'Segoe UI', Roboto, sans-serif;
      color: #111827;
    }
    .doc-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .doc-header h1 {
      color: var(--accent);
      font-size: 2rem;
      animation: fadeIn 1s ease-in-out;
    }
    .doc-section {
      background: var(--card);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 10px 25px var(--shadow);
      transition: transform 0.3s, box-shadow 0.3s;
      animation: slideUp 0.8s ease forwards;
    }
    .doc-section:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 36px var(--shadow);
    }
    .doc-section h3 {
      color: var(--accent);
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    .doc-section p {
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
    <div className="doc-container">
      <style>{styles}</style>

      <div className="doc-header">
        <h1>TradeEasy Documentation</h1>
        <p>This documentation explains how TradeEasy manages secure access, predictive trading, and user experience for both authorized and unauthorized users.</p>
      </div>

      <div className="doc-section">
        <h3>1. User Authentication</h3>
        <p>TradeEasy ensures that only registered and verified users can access the dashboard. Users must provide valid credentials to log in, which prevents unauthorized access. Our authentication system uses encrypted passwords, secure login protocols, and optional two-factor authentication. By enforcing strong authentication measures, we ensure that sensitive trading information and personal data are protected from breaches or misuse.</p>
      </div>

      <div className="doc-section">
        <h3>2. Dashboard Access</h3>
        <p>The dashboard is the central hub for authorized users, providing real-time market data, personalized trading insights, and portfolio management tools. Unauthorized users are restricted to public pages only, ensuring that critical data such as predictive analytics, account balances, and trade execution features remain confidential. The dashboard is designed for usability and clarity, allowing users to navigate efficiently and make informed trading decisions.</p>
      </div>

      <div className="doc-section">
        <h3>3. Predictive Trading Model</h3>
        <p>TradeEasy leverages machine learning algorithms to analyze historical stock data, identify patterns, and forecast potential stock movements. The model continuously learns from new market data, improving the accuracy of its predictions over time. It considers multiple factors, including price trends, trading volumes, and market sentiment, to provide actionable insights. By integrating AI and ML, TradeEasy offers users data-driven guidance to optimize investment decisions and reduce risks associated with market volatility.</p>
      </div>

      <div className="doc-section">
        <h3>4. Security Measures</h3>
        <p>Security is a top priority for TradeEasy. All user data is encrypted using industry-standard protocols, and sensitive operations are protected with secure access controls. Unauthorized login attempts are detected and blocked, while audit logs track all user activities for accountability. Additionally, network and application layers are continuously monitored to prevent cyber threats. These measures ensure that users can trade with confidence knowing their funds and information are safe.</p>
      </div>

      <div className="doc-section">
        <h3>5. Frontend Access for Visitors</h3>
        <p>Visitors who are not logged in can explore public sections of the website, such as blogs, educational materials, and general information about TradeEasy. However, access to the dashboard, predictive tools, and trading functionalities is restricted. This ensures that sensitive data remains secure while allowing potential users to understand the platform's features and benefits before registering.</p>
      </div>

    </div>
  );
}