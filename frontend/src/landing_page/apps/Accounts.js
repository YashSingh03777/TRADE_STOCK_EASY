import React from 'react';

// Accounts.jsx
// Self-contained React component: brief explanations + step-by-step guide + embedded CSS.
// You can paste this file into your project (e.g. src/landing_page/apps/Accounts.jsx).

export default function Accounts() {
  const styles = `
  :root{
    --bg: #f5f8ff;
    --accent: #0b69ff;
    --muted: #6b7280;
    --card: #ffffff;
  }
  .tradeeasy-accounts{
    max-width: 980px;
    margin: 32px auto;
    padding: 18px;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    color: #0f172a;
  }
  .ta-header{
    background: linear-gradient(90deg,var(--accent), #6bc1ff);
    color: white;
    padding: 18px 20px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(11,105,255,0.12);
  }
  .ta-header h1{ margin:0; font-size:1.45rem; }
  .ta-header .lead{ margin-top:6px; opacity:0.95; font-size:0.98rem; }

  .ta-overview{ margin-top:18px; }
  .ta-grid{ display:grid; gap:12px; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); margin-top:12px; }
  .ta-card{ background:var(--card); padding:12px; border-radius:10px; box-shadow: 0 8px 18px rgba(15,23,42,0.06); }
  .ta-card h3{ margin:0 0 6px 0; color:var(--accent); font-size:1.02rem; }
  .ta-card p{ margin:0; color:var(--muted); font-size:0.92rem; }

  .ta-steps{ margin-top:22px; }
  .ta-steps ol{ margin:0; padding-left:1.05rem; }
  .ta-steps li{ margin:10px 0; color:var(--muted); line-height:1.45; }
  .ta-steps li strong{ color:#071a46; }

  .ta-tips{ margin-top:18px; }
  .ta-tips ul{ margin:6px 0 0 18px; color:var(--muted); }

  .cta-row{ display:flex; gap:12px; margin-top:18px; align-items:center; }
  .btn-cta{ background:var(--accent); color:white; border:none; padding:10px 14px; border-radius:8px; cursor:pointer; box-shadow:0 10px 24px rgba(11,105,255,0.14); }
  .btn-ghost{ background:transparent; border:1px solid rgba(11,105,255,0.12); padding:8px 12px; border-radius:8px; cursor:pointer; }

  @media (max-width:560px){ .ta-header h1{ font-size:1.15rem } .tradeeasy-accounts{ padding:12px } }
  `;

  return (
    <div className="tradeeasy-accounts">
      <style>{styles}</style>

      <header className="ta-header">
        <h1>Trading Accounts — Quick guide</h1>
        <p className="lead">Short, clear descriptions of common account types and a simple step-by-step to get started fast.</p>
      </header>

      <section className="ta-overview">
        <h2 style={{fontSize: '1.05rem', marginTop: '14px'}}>What they are (brief)</h2>
        <div className="ta-grid">
          <div className="ta-card">
            <h3>Demat Account</h3>
            <p>Holds shares and securities electronically. Required in India to own listed shares.</p>
          </div>

          <div className="ta-card">
            <h3>Trading Account</h3>
            <p>Used to place buy/sell orders; linked to your Demat and bank accounts.</p>
          </div>

          <div className="ta-card">
            <h3>Margin Account</h3>
            <p>Enables borrowing from the broker for leverage. Higher buying power — higher risk.</p>
          </div>

          <div className="ta-card">
            <h3>Cash Account</h3>
            <p>Trade only with deposited funds. No leverage — simple and lower risk.</p>
          </div>

          <div className="ta-card">
            <h3>Options / Derivatives</h3>
            <p>Approved accounts for futures & options trading — require experience and approvals.</p>
          </div>

          <div className="ta-card">
            <h3>Retirement / Investment</h3>
            <p>Tax-advantaged or long-term investment accounts (IRAs, etc.) in some countries.</p>
          </div>
        </div>
      </section>

      <section className="ta-steps">
        <h2 style={{fontSize: '1.05rem', marginTop: '18px'}}>Open & access — Step-by-step</h2>
        <ol>
          <li><strong>Choose a broker:</strong> Compare fees, app/web experience, market access and support.</li>
          <li><strong>Prepare documents:</strong> Keep PAN, Aadhar/ID, bank statement, cancelled cheque and proof of address ready.</li>
          <li><strong>Sign up & Complete KYC:</strong> Register on the broker's site/app and complete eKYC (digital verification) or submit documents.</li>
          <li><strong>Open Demat + Trading:</strong> Most brokers open both together; confirm account IDs and login details.</li>
          <li><strong>Link your bank:</strong> Add your primary bank account for fund transfers (NEFT/IMPS/UPI/IMPS depending on region).</li>
          <li><strong>Enable features:</strong> Request margin, derivatives or options access if you need them — often requires additional forms/approvals.</li>
          <li><strong>Fund the account:</strong> Transfer money to your broker's ledger/wallet and verify the balance.</li>
          <li><strong>Start trading:</strong> Use watchlists, place small orders first, and monitor orders/holdings in the Demat dashboard.</li>
        </ol>
      </section>

      <section className="ta-tips">
        <h2 style={{fontSize: '1.05rem', marginTop: '18px'}}>Quick tips</h2>
        <ul>
          <li>Begin with a cash account if you're new — avoid leverage until you're comfortable.</li>
          <li>Check the broker's brokerage & hidden fees (transaction charges, GST, SEBI fees, etc.).</li>
          <li>Enable two-factor authentication and keep backups of OTP devices or recovery phrases.</li>
          <li>Use small amounts to test order execution and platform behavior before scaling up.</li>
        </ul>
      </section>

      <div className="cta-row">
        <button className="btn-cta">Open an account</button>
        <button className="btn-ghost">Compare brokers</button>
      </div>

    </div>
  );
}
