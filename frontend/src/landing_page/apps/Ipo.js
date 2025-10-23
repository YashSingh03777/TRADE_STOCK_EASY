import React from 'react';

export default function Ipo() {
  const styles = `
    :root {
      --bg: #f9fafb;
      --accent: #1d4ed8;
      --card: #ffffff;
      --muted: #4b5563;
      --shadow: rgba(29,78,216,0.2);
    }
    .ipo-container {
      max-width: 960px;
      margin: 40px auto;
      padding: 20px;
      font-family: 'Segoe UI', Roboto, sans-serif;
      color: #111827;
    }
    .ipo-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .ipo-header h1 {
      color: var(--accent);
      font-size: 2rem;
      animation: fadeIn 1s ease-in-out;
    }
    .ipo-section {
      background: var(--card);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 10px 25px var(--shadow);
      transition: transform 0.3s, box-shadow 0.3s;
      animation: slideUp 0.8s ease forwards;
    }
    .ipo-section:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 36px var(--shadow);
    }
    .ipo-section h3 {
      color: var(--accent);
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    .ipo-section p {
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
    <div className="ipo-container">
      <style>{styles}</style>

      <div className="ipo-header">
        <h1>Initial Public Offerings (IPO)</h1>
        <p>This section explains how IPOs work, their benefits, risks, and provides a real-life example.</p>
      </div>

      <div className="ipo-section">
        <h3>What is an IPO?</h3>
        <p>An IPO, or Initial Public Offering, is the process by which a private company offers its shares to the public for the first time. This allows the company to raise capital from investors and become publicly listed on the stock exchange. IPOs are regulated by financial authorities to ensure transparency and protect investors.</p>
      </div>

      <div className="ipo-section">
        <h3>How IPOs Work</h3>
        <p>When a company decides to go public, it appoints underwriters (usually investment banks) to manage the offering. The company determines the number of shares and the price range. Investors can apply for shares during the IPO period. Once the IPO closes, shares are allocated, and the stock begins trading on the exchange. The process provides liquidity to existing shareholders and capital to the company for growth.</p>
      </div>

      <div className="ipo-section">
        <h3>Benefits of Investing in an IPO</h3>
        <p>Investing in an IPO can provide early access to potential high-growth companies. It can also diversify an investor’s portfolio. For companies, IPOs provide capital for expansion, reduce debt, and enhance credibility in the market.</p>
      </div>

      <div className="ipo-section">
        <h3>Risks Involved</h3>
        <p>IPOs carry market risks as the stock price may fluctuate significantly after listing. Demand and supply, market sentiment, and company performance can influence prices. Investors should carefully analyze the company’s financials, growth prospects, and IPO prospectus before investing.</p>
      </div>

      <div className="ipo-section">
        <h3>Real-Life Example</h3>
        <p>For example, Paytm launched its IPO in India in 2021. The company offered shares to the public at a specific price, allowing investors to participate in its growth. Investors who subscribed during the IPO period had the opportunity to buy shares before the stock started trading on the exchange.</p>
      </div>

    </div>
  );
}
