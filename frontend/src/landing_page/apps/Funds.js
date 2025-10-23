import React from 'react';

export default function Funds() {
  const styles = `
    :root {
      --bg: #f9fafb;
      --accent: #1d4ed8;
      --card: #ffffff;
      --muted: #4b5563;
      --shadow: rgba(29,78,216,0.2);
    }
    .funds-container {
      max-width: 960px;
      margin: 40px auto;
      padding: 20px;
      font-family: 'Segoe UI', Roboto, sans-serif;
      color: #111827;
    }
    .funds-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .funds-header h1 {
      color: var(--accent);
      font-size: 2rem;
    }
    .fund-section {
      background: var(--card);
      border-radius: 12px;
      padding: 18px;
      margin-bottom: 18px;
      box-shadow: 0 10px 25px var(--shadow);
      transition: transform 0.3s;
    }
    .fund-section:hover {
      transform: translateY(-5px);
    }
    .fund-section h3 {
      color: var(--accent);
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    .fund-section p {
      color: var(--muted);
      line-height: 1.5;
    }
  `;

  return (
    <div className="funds-container">
      <style>{styles}</style>

      <div className="funds-header">
        <h1>Trading Funds</h1>
        <p>A brief guide to different types of funds and how they are used in trading.</p>
      </div>

      <div className="fund-section">
        <h3>1. Equity Funds</h3>
        <p>These funds invest primarily in stocks. They aim for long-term capital growth and are suitable for investors willing to accept higher risk for potentially higher returns.</p>
      </div>

      <div className="fund-section">
        <h3>2. Debt Funds</h3>
        <p>Debt funds invest in bonds, government securities, and other fixed-income instruments. They are relatively safer than equity funds and provide steady returns.</p>
      </div>

      <div className="fund-section">
        <h3>3. Hybrid Funds</h3>
        <p>Hybrid funds invest in a mix of equities and debt instruments. They balance risk and return, offering moderate growth with some stability.</p>
      </div>

      <div className="fund-section">
        <h3>4. Index Funds</h3>
        <p>Index funds track the performance of a market index like Nifty 50 or S&P 500. They offer broad market exposure with lower management costs.</p>
      </div>

      <div className="fund-section">
        <h3>5. Money Market Funds</h3>
        <p>These funds invest in short-term debt instruments and are highly liquid. They are suitable for parking funds temporarily with minimal risk.</p>
      </div>

      <div className="fund-section">
        <h3>How Funds Work in Trading</h3>
        <p>Investors deposit money into a fund, which is then managed by professional fund managers. Funds diversify investments across various assets to reduce risk. Returns are generated through interest, dividends, and capital gains, depending on the type of fund.</p>
      </div>

      <div className="fund-section">
        <h3>Choosing the Right Fund</h3>
        <p>Selection depends on risk tolerance, investment goals, and time horizon. Equity funds suit long-term growth, debt funds suit stability, and hybrid funds are ideal for balanced investors.</p>
      </div>

    </div>
  );
}
