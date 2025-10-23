// import React, { useState } from "react";
// import axios from "axios";
// import "./Apps.css";

// const Apps = () => {
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState({
//     amount: "",
//     experience: "",
//     duration: "",
//     sector: "",
//   });
//   const [successMsg, setSuccessMsg] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     setError(""); // clear error on change
//   };

//   const nextStep = () => {
//     if (step === 1 && !formData.amount) {
//       setError("❌ Please enter an amount");
//       return;
//     }
//     if (step === 2 && !formData.experience) {
//       setError("❌ Please select your experience");
//       return;
//     }
//     if (step === 3 && !formData.duration) {
//       setError("❌ Please select duration");
//       return;
//     }
//     setError("");
//     setSuccessMsg("");
//     setStep(step + 1);
//   };

//   const prevStep = () => {
//     setError("");
//     setSuccessMsg("");
//     setStep(step - 1);
//   };

//   const handleSubmit = async () => {
//     // ✅ Make sure all fields are filled
//     const { amount, experience, duration, sector } = formData;
//     if (!amount || !experience || !duration || !sector) {
//       setError("❌ All fields are required");
//       return;
//     }

//     setError("");
//     setSuccessMsg("");
//     setLoading(true);

//     try {
//       const response = await axios.post(
//         "http://localhost:3002/api/form/submit",
//         formData
//       );
//       setSuccessMsg(response.data.message || "Data submitted successfully");
//       setLoading(false);
//     } catch (err) {
//       console.error("Backend error:", err.response || err.message);
//       if (err.response && err.response.data && err.response.data.error) {
//         setError(`❌ ${err.response.data.error}`);
//       } else {
//         setError("❌ Something went wrong. Check backend server.");
//       }
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="apps-container">
//       <div className="apps-box">
//         {step === 0 && (
//           <div className="intro-section">
//             <h1 className="intro-title">🚀 Why Choose Us?</h1>
//             <p className="intro-text">
//               We provide a <span className="highlight">faster, smarter, and reliable investing experience</span>.
//               Our <span className="highlight">AI-powered model</span> will later help you make smarter predictions.
//             </p>
//             <p className="intro-extra">
//               ✅ Advanced Machine Learning <br/>
//               ✅ Faster Data Processing <br/>
//               ✅ Smart Investment Insights <br/>
//               ✅ Built for Beginners & Experts
//             </p>
//             <button type="button" onClick={nextStep} className="btn-primary">
//               Start My Investment Journey →
//             </button>
//           </div>
//         )}

//         {step > 0 && (
//           <div className="progress-bar">
//             <div className="progress" style={{ width: `${(step / 4) * 100}%` }}></div>
//           </div>
//         )}

//         {step === 1 && (
//           <div className="step-section">
//             <h2 className="step-title">💰 How much do you want to invest?</h2>
//             <input
//               type="number"
//               className="input-box"
//               placeholder="Enter amount"
//               value={formData.amount}
//               onChange={(e) => handleChange("amount", e.target.value)}
//             />
//             <div className="step-buttons">
//               <button type="button" onClick={prevStep} className="btn-secondary">← Back</button>
//               <button type="button" onClick={nextStep} className="btn-primary">Next →</button>
//             </div>
//           </div>
//         )}

//         {step === 2 && (
//           <div className="step-section">
//             <h2 className="step-title">👤 Are you a beginner or experienced?</h2>
//             <div className="grid-buttons">
//               {["beginner", "experienced"].map((exp) => (
//                 <button
//                   type="button"
//                   key={exp}
//                   onClick={() => handleChange("experience", exp)}
//                   className={`option-btn ${formData.experience === exp ? "selected" : ""}`}
//                 >
//                   {exp.charAt(0).toUpperCase() + exp.slice(1)}
//                 </button>
//               ))}
//             </div>
//             <div className="step-buttons">
//               <button type="button" onClick={prevStep} className="btn-secondary">← Back</button>
//               <button type="button" onClick={nextStep} className="btn-primary">Next →</button>
//             </div>
//           </div>
//         )}

//         {step === 3 && (
//           <div className="step-section">
//             <h2 className="step-title">⏳ Long Term or Intraday?</h2>
//             <div className="grid-buttons">
//               {["longterm", "intraday"].map((d) => (
//                 <button
//                   type="button"
//                   key={d}
//                   onClick={() => handleChange("duration", d)}
//                   className={`option-btn ${formData.duration === d ? "selected" : ""}`}
//                 >
//                   {d === "longterm" ? "Long Term" : "Intraday"}
//                 </button>
//               ))}
//             </div>
//             <div className="step-buttons">
//               <button type="button" onClick={prevStep} className="btn-secondary">← Back</button>
//               <button type="button" onClick={nextStep} className="btn-primary">Next →</button>
//             </div>
//           </div>
//         )}

//         {step === 4 && (
//           <div className="step-section">
//             <h2 className="step-title">📊 Choose your sector</h2>
//             <div className="grid-buttons">
//               {["Google", "Apple", "Nifty"].map((s) => (
//                 <button
//                   type="button"
//                   key={s}
//                   onClick={() => handleChange("sector", s)}
//                   className={`option-btn ${formData.sector === s ? "selected" : ""}`}
//                 >
//                   {s}
//                 </button>
//               ))}
//             </div>
//             <div className="step-buttons">
//               <button type="button" onClick={prevStep} className="btn-secondary">← Back</button>
//               <button type="button" onClick={handleSubmit} className="btn-success">
//                 {loading ? "Saving..." : "💾 Save Data"}
//               </button>
//             </div>

//             {successMsg && <p style={{ color: "green", marginTop: "10px" }}>{successMsg}</p>}
//             {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Apps;



import React, { useState } from "react";
import axios from "axios";
import StockChart from "./ChartRef"; // Import chart component here
import "./Apps.css";

const Apps = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    amount: "",
    experience: "",
    duration: "",
    sector: "",
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const nextStep = () => {
    if (step === 1 && !formData.amount) {
      setError("❌ Please enter an amount");
      return;
    }
    if (step === 2 && !formData.experience) {
      setError("❌ Please select your experience");
      return;
    }
    if (step === 3 && !formData.duration) {
      setError("❌ Please select duration");
      return;
    }
    setError("");
    setSuccessMsg("");
    setStep(step + 1);
  };

  const prevStep = () => {
    setError("");
    setSuccessMsg("");
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    const { amount, experience, duration, sector } = formData;
    if (!amount || !experience || !duration || !sector) {
      setError("❌ All fields are required");
      return;
    }

    setError("");
    setSuccessMsg("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3002/api/form/submit",
        formData
      );
      setSuccessMsg(response.data.message || "✅ Information saved successfully.");
      setLoading(false);
    } catch (err) {
      console.error("Backend error:", err.response || err.message);
      if (err.response?.data?.error) {
        setError(`❌ ${err.response.data.error}`);
      } else {
        setError("❌ Something went wrong. Check backend server.");
      }
      setLoading(false);
    }
  };

  return (
    <div className="apps-container">
      <div className="apps-box">
        {step === 0 && (
          <div className="intro-section">
            <h1 className="intro-title">🚀 Why Choose Us?</h1>
            <p className="intro-text">
              We provide a <span className="highlight">faster, smarter, and reliable investing experience</span>.
              Our <span className="highlight">AI-powered model</span> will later help you make smarter predictions.
            </p>
            <p className="intro-extra">
              ✅ Advanced Machine Learning <br />
              ✅ Faster Data Processing <br />
              ✅ Smart Investment Insights <br />
              ✅ Built for Beginners & Experts
            </p>
            <button type="button" onClick={nextStep} className="btn-primary">
              Start My Investment Journey →
            </button>
          </div>
        )}

        {step > 0 && (
          <div className="progress-bar">
            <div className="progress" style={{ width: `${(step / 4) * 100}%` }}></div>
          </div>
        )}

        {step === 1 && (
          <div className="step-section">
            <h2 className="step-title">💰 How much do you want to invest?</h2>
            <input
              type="number"
              className="input-box"
              placeholder="Enter amount"
              value={formData.amount}
              onChange={(e) => handleChange("amount", e.target.value)}
            />
            <div className="step-buttons">
              <button type="button" onClick={prevStep} className="btn-secondary">← Back</button>
              <button type="button" onClick={nextStep} className="btn-primary">Next →</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="step-section">
            <h2 className="step-title">👤 Are you a beginner or experienced?</h2>
            <div className="grid-buttons">
              {["beginner", "experienced"].map((exp) => (
                <button
                  type="button"
                  key={exp}
                  onClick={() => handleChange("experience", exp)}
                  className={`option-btn ${formData.experience === exp ? "selected" : ""}`}
                >
                  {exp.charAt(0).toUpperCase() + exp.slice(1)}
                </button>
              ))}
            </div>
            <div className="step-buttons">
              <button type="button" onClick={prevStep} className="btn-secondary">← Back</button>
              <button type="button" onClick={nextStep} className="btn-primary">Next →</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="step-section">
            <h2 className="step-title">⏳ Long Term or Intraday?</h2>
            <div className="grid-buttons">
              {["longterm", "intraday"].map((d) => (
                <button
                  type="button"
                  key={d}
                  onClick={() => handleChange("duration", d)}
                  className={`option-btn ${formData.duration === d ? "selected" : ""}`}
                >
                  {d === "longterm" ? "Long Term" : "Intraday"}
                </button>
              ))}
            </div>
            <div className="step-buttons">
              <button type="button" onClick={prevStep} className="btn-secondary">← Back</button>
              <button type="button" onClick={nextStep} className="btn-primary">Next →</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="step-section">
            <h2 className="step-title">📈 Prediction-ready Stocks</h2>
            <p className="info-text">
              Our AI engine is trained on <strong>Apple Inc. (AAPL)</strong> historical data and uses real-time feeds from <strong>Yahoo Finance</strong>.
              We also test predictions using <strong>Microsoft (MSFT)</strong> and curated CSV datasets.
            </p>
            <p className="info-subtext">
              Please select a stock category to complete your preferences.
            </p>
            <div className="grid-buttons">
              {["Apple (AAPL)", "Microsoft (MSFT)", "Yahoo Finance Trends"].map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => handleChange("sector", s)}
                  className={`option-btn ${formData.sector === s ? "selected" : ""}`}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="step-buttons">
              <button type="button" onClick={prevStep} className="btn-secondary">← Back</button>
              <button type="button" onClick={handleSubmit} className="btn-success">
                {loading ? "Saving..." : "💾 Save Info"}
              </button>
            </div>

            {error && <p style={{ color: "red", marginTop: "15px" }}>{error}</p>}

            {successMsg && (
              <>
                <p style={{ color: "green", marginTop: "15px" }}>{successMsg}</p>
                <div className="final-message">
                  <h3 style={{ marginTop: "20px", fontSize: "18px" }}>📋 Submitted Information</h3>
                  <ul style={{ listStyle: "none", paddingLeft: 0, lineHeight: "1.8" }}>
                    <li><strong>💰 Investment Amount:</strong> ${formData.amount}</li>
                    <li><strong>🧠 Experience Level:</strong> {formData.experience}</li>
                    <li><strong>📅 Duration:</strong> {formData.duration === "longterm" ? "Long Term" : "Intraday"}</li>
                    <li><strong>📊 Selected Stock:</strong> {formData.sector}</li>
                  </ul>
                  <p style={{ marginTop: "10px", fontSize: "16px", lineHeight: "1.6" }}>
                    ✅ Your investment preferences have been stored successfully.
                    <br />
                    🔍 Note: These are used for user analytics only — our prediction engine runs independently using live market and CSV-based data.
                  </p>
                  <a
                    href="https://stock-price-prediction-nxsvfhthfxmfmnesmskqhl.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ marginTop: "15px", display: "inline-block", textDecoration: "none" }}
                  >
                    🔍 View AI Stock Predictions →
                  </a>
                </div>
                <div style={{ marginTop: "40px" }}>
                  <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>📊 Historical Stock Trends</h3>
                  <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
                    Our AI model has been <strong>trained on years of historical stock data</strong> from leading companies like <strong>Apple, Microsoft, Uber</strong> and trend data from <strong>Yahoo Finance</strong>.<br /><br />
                    These companies were selected for their <strong>strong fundamentals, global influence, and consistent market activity</strong>.<br />
                    With machine learning analyzing their patterns in real-time, you're not just investing — you're investing <strong>intelligently</strong>.
                  </p>
                  <StockChart />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
