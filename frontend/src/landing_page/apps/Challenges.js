import React from 'react';

export default function Challenges() {
  const styles = `
    :root {
      --bg: #f3f4f6;
      --accent: #1d4ed8;
      --card: #ffffff;
      --muted: #4b5563;
      --shadow: rgba(29,78,216,0.2);
    }
    .challenges-container {
      max-width: 960px;
      margin: 40px auto;
      padding: 20px;
      font-family: 'Segoe UI', Roboto, sans-serif;
      color: #111827;
      background: var(--bg);
      border-radius: 12px;
    }
    .challenges-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .challenges-header h1 {
      color: var(--accent);
      font-size: 2rem;
    }
    .challenge-section {
      background: var(--card);
      border-radius: 12px;
      padding: 18px;
      margin-bottom: 18px;
      box-shadow: 0 10px 25px var(--shadow);
      transition: transform 0.3s;
    }
    .challenge-section:hover {
      transform: translateY(-5px);
    }
    .challenge-section h3 {
      color: var(--accent);
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    .challenge-section p {
      color: var(--muted);
      line-height: 1.5;
    }
  `;

  return (
    <div className="challenges-container">
      <style>{styles}</style>

      <div className="challenges-header">
        <h1>User Challenges</h1>
        <p>Understanding the potential challenges users may face while using TradeEasy and how we address them.</p>
      </div>

      <div className="challenge-section">
        <h3>1. Platform Navigation</h3>
        <p>New users may find it challenging to navigate the trading dashboard. We provide tutorials, tooltips, and an intuitive interface to make navigation easy.</p>
      </div>

      <div className="challenge-section">
        <h3>2. Understanding Stock Market Terms</h3>
        <p>Users may struggle with trading jargon and terms like margin, derivatives, and brokerage. We include educational resources and easy-to-understand explanations.</p>
      </div>

      <div className="challenge-section">
        <h3>3. Real-time Data Handling</h3>
        <p>Some users may face difficulties with live stock data updates. TradeEasy optimizes its data feeds and provides real-time updates with minimal latency.</p>
      </div>

      <div className="challenge-section">
        <h3>4. Security Concerns</h3>
        <p>Users may worry about the safety of their accounts and funds. TradeEasy ensures secure transactions with encryption, two-factor authentication, and compliance with regulations.</p>
      </div>

      <div className="challenge-section">
        <h3>5. Technical Support</h3>
        <p>Users might encounter technical issues while trading. We provide responsive customer support, FAQs, and a dedicated help center to resolve problems quickly.</p>
      </div>

      <div className="challenge-section">
        <h3>Our Platform Challenges</h3>
        <p>At TradeEasy, we face challenges in making predictions more accurate using Machine Learning, optimizing algorithmic trading, handling high-frequency data efficiently, and ensuring minimal latency. Our team continuously works on improving the ML models and system architecture to provide users with fast, reliable, and precise trading insights.</p>
      </div>

    </div>
  );
}