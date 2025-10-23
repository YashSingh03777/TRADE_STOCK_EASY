import React from 'react';

export default function Blogs() {
  const styles = `
    :root {
      --bg: #f0f4f8;
      --accent: #1d4ed8;
      --card: #ffffff;
      --muted: #4b5563;
      --shadow: rgba(29,78,216,0.25);
    }
    .blogs-container {
      max-width: 1000px;
      margin: 40px auto;
      padding: 20px;
      font-family: 'Segoe UI', Roboto, sans-serif;
      color: #111827;
      background: var(--bg);
      border-radius: 15px;
    }
    .blogs-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .blogs-header h1 {
      font-size: 2rem;
      color: var(--accent);
      margin-bottom: 8px;
    }
    .blogs-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }
    .blog-card {
      background: var(--card);
      flex: 1 1 280px;
      max-width: 300px;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 12px 24px var(--shadow);
      transition: transform 0.3s, box-shadow 0.3s;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .blog-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 36px var(--shadow);
    }
    .blog-card h3 {
      color: var(--accent);
      font-size: 1.15rem;
      margin-bottom: 10px;
    }
    .blog-card p {
      color: var(--muted);
      font-size: 0.95rem;
      flex-grow: 1;
    }
    .blog-card a, .blog-card iframe {
      margin-top: 12px;
      align-self: flex-start;
      color: var(--accent);
      font-weight: 600;
      text-decoration: none;
      transition: color 0.2s;
    }
    .blog-card a:hover {
      color: #2563eb;
    }
    .about-us {
      margin-top: 40px;
      padding: 25px;
      background: linear-gradient(120deg, #e0f2fe, #f0f9ff);
      border-radius: 15px;
      text-align: center;
      box-shadow: 0 10px 25px rgba(0,0,0,0.05);
    }
    .about-us h3 {
      color: var(--accent);
      font-size: 1.5rem;
      margin-bottom: 12px;
    }
    .about-us p {
      color: var(--muted);
      font-size: 1rem;
      line-height: 1.5;
    }
  `;

  return (
    <div className="blogs-container">
      <style>{styles}</style>

      <div className="blogs-header">
        <h1>TradeEasy Blogs & Videos</h1>
      </div>

      <div className="blogs-grid">
        <div className="blog-card">
          <h3>📝 How to Reduce Brokerage Fees</h3>
          <p>Learn strategies to minimize your brokerage costs and maximize your returns.</p>
          <iframe width="100%" height="180" src="https://www.youtube.com/embed/Mw1n2lRH7tM" title="How to Reduce Brokerage Fees" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="blog-card">
          <h3>📈 Top 5 Stocks to Watch This Week</h3>
          <p>Discover which stocks have the most potential this week based on market trends.</p>
          <iframe width="100%" height="180" src="https://www.youtube.com/embed/nmZkeXD_tag" title="Top 5 Stocks to Watch This Week" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="blog-card">
          <h3>🤖 How Machine Learning Helps in Stock Prediction</h3>
          <p>Understand how AI and ML models can analyze historical data to predict stock movements.</p>
          <iframe width="100%" height="180" src="https://www.youtube.com/embed/IJ50ew8wi-0" title="Stock Price Prediction in Python with PyTorch" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="blog-card">
          <h3>⏱ Best Time to Enter the Market</h3>
          <p>Learn how to identify optimal entry points to maximize gains and reduce risks.</p>
          <iframe width="100%" height="180" src="https://www.youtube.com/embed/x7DVfjSJtCQ" title="What's the Best Time to Invest?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="blog-card">
          <h3>💡 Beginner’s Guide to Demat and Trading Accounts</h3>
          <p>A simple guide to understanding different account types and their importance in trading.</p>
          <iframe width="100%" height="180" src="https://www.youtube.com/embed/aQQ1JthC0f8" title="Demat & Trading Account For Beginners" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>

      <div className="about-us">
        <h3>About TradeEasy</h3>
        <p>TradeEasy is a modern trading platform designed to reduce brokerage, provide fast and reliable access, and support smart decision-making using technology and machine learning. Our goal is to make trading easier, cost-efficient, and more effective for every investor. Watch our videos to learn how TradeEasy helps you save time, reduce costs, and make informed decisions.</p>
      </div>
    </div>
  );
}
