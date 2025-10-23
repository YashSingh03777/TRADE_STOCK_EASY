import React from 'react';

export default function Charges() {
  const styles = `
    :root {
      --bg: #f9fafb;
      --accent: #1d4ed8;
      --card: #ffffff;
      --muted: #4b5563;
      --shadow: rgba(29,78,216,0.2);
    }
    .charges-container {
      max-width: 960px;
      margin: 40px auto;
      padding: 20px;
      font-family: 'Segoe UI', Roboto, sans-serif;
      color: #111827;
    }
    .charges-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .charges-header h1 {
      color: var(--accent);
      font-size: 2rem;
    }
    .charges-section {
      background: var(--card);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 10px 25px var(--shadow);
      transition: transform 0.3s;
    }
    .charges-section:hover {
      transform: translateY(-5px);
    }
    .charges-section h3 {
      color: var(--accent);
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    .charges-section p {
      color: var(--muted);
      line-height: 1.5;
    }
  `;

  return (
    <div className="charges-container">
      <style>{styles}</style>

      <div className="charges-header">
        <h1>TradeEasy Charges</h1>
        <p>  <b>We are committed to providing lower charges than the market. Currently, all charges are completely zero as we are in the working phase.</b></p>
      </div>

      <div className="charges-section">
        <h3>1. Brokerage Fees</h3>
        <p>TradeEasy ensures zero brokerage for all users during the current phase. In the future, minimal charges may be introduced, always lower than the market rate.</p>
      </div>

      <div className="charges-section">
        <h3>2. Transaction Charges</h3>
        <p>Currently, no transaction charges are applied. Our system is optimized to process trades efficiently while keeping fees negligible for users.</p>
      </div>

      <div className="charges-section">
        <h3>3. Account Maintenance</h3>
        <p>There are no maintenance fees for your account. We aim to keep all accounts free of hidden charges, making trading accessible to everyone.</p>
      </div>

      <div className="charges-section">
        <h3>4. Future Enhancements</h3>
        <p>As TradeEasy evolves, we may introduce optional premium services, but the core trading charges will remain lower than industry standards.</p>
      </div>

      <div className="charges-section">
        <h3>5. Commitment to Users</h3>
        <p>Our mission is to provide fast, reliable trading with minimal costs. We are constantly optimizing our platform to maintain the lowest possible fees while ensuring high-quality services.</p>
      </div>

    </div>
  );
}