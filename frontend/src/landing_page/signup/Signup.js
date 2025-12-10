// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Signup.css"; // reuse your CSS

// function AuthForm() {
//   const [isLogin, setIsLogin] = useState(false); // toggle between signup/login
//   const [formData, setFormData] = useState({ username: "", email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isLogin) {
//         // Login flow
//         const res = await axios.post("http://localhost:3002/api/auth/login", {
//           email: formData.email,
//           password: formData.password,
//         });
//         setMessage("Login successful! Redirecting to dashboard...");
//         localStorage.setItem("user", JSON.stringify(res.data.user));
//         setTimeout(() => navigate("/dashboard"), 1500);
//       } else {
//         // Signup flow
//         await axios.post("http://localhost:3002/api/auth/signup", formData);
//         setMessage("Signup successful! You can now login.");
//         setFormData({ username: "", email: "", password: "" });
//         setIsLogin(true); // switch to login after signup
//       }
//     } catch (err) {
//       setMessage(err.response?.data?.error || "Operation failed");
//     }
//   };

//   return (
//     <div className="home_page">
//       <div className="form_container">
//         <h2>{isLogin ? "Login" : "Sign Up"}</h2>
//         {message && <div className={message.includes("successful") ? "success-msg" : "error-msg"}>{message}</div>}
//         <form onSubmit={handleSubmit}>
//           {!isLogin && (
//             <div>
//               <label>Username</label>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Enter username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           )}
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
//         </form>
//         <span style={{ marginTop: "1rem", display: "block", textAlign: "center" }}>
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <a
//             href="#!"
//             onClick={() => {
//               setIsLogin(!isLogin);
//               setMessage("");
//               setFormData({ username: "", email: "", password: "" });
//             }}
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </a>
//         </span>
//       </div>
//     </div>
//   );
// }

// export default AuthForm;


// these is the correct code that is already working completely fine in the local system 

// import React, { useState } from "react";
// import axios from "axios";
// import "./Signup.css"; // reuse your CSS

// function Signup() {
//   const [isLogin, setIsLogin] = useState(false); // toggle between signup/login
//   const [formData, setFormData] = useState({ username: "", email: "", password: "" });
//   const [message, setMessage] = useState("");

//   // Input change handler
//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   // Form submit handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (isLogin) {
//         // Login flow
//         // const res = await axios.post("http://localhost:3002/api/auth/login",
          
//           // DEPLOYED URL 
//           const res = await axios.post(`https://tradebackend-pc2r.onrender.com/api/auth/login`,
//           {
//           email: formData.email,
//           password: formData.password,
//         });

//         // Save user in localStorage
//         localStorage.setItem("user", JSON.stringify(res.data.user));
//         setMessage("Login successful! Redirecting to dashboard...");

//         // Redirect to dashboard app (port 3000)
//         setTimeout(() => {
//           // window.location.href = "http://localhost:3000";
//           //DEPLOYED URL of dashboard access 
//            window.location.href = `https://trade-dashboard-36vd.onrender.com`;
//         }, 1500);

//       } else {
//         // Signup flow
//         // await axios.post("http://localhost:3002/api/auth/signup", formData);

//         //DEPLOYED URL
//          await axios.post(`https://tradebackend-pc2r.onrender.com/api/auth/signup`, formData);
//         setMessage("Signup successful! You can now login.");
//         setFormData({ username: "", email: "", password: "" });
//         setIsLogin(true); // Switch to login after signup
//       }
//     } catch (err) {
//       setMessage(err.response?.data?.error || "Operation failed");
//     }
//   };

//   return (
//     <div className="home_page">
//       <div className="form_container">
//  {/* <div className="logo">
//       <img
//         src="media/logo.png"
//         class="img-fluid rounded-top"
//         alt=""
//       />
      
//       </div> */}

//         <h2>{isLogin ? "Login" : "Sign Up"}</h2>

//         {message && (
//           <div className={message.includes("successful") ? "success-msg" : "error-msg"}>
//             {message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           {!isLogin && (
//             <div>
//               <label>Username</label>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Enter username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           )}

//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
          

//           <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
//         </form>

//         <span style={{ marginTop: "1rem", display: "block", textAlign: "center" }}>
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <a
//             href="#!"
//             onClick={() => {
//               setIsLogin(!isLogin);
//               setMessage("");
//               setFormData({ username: "", email: "", password: "" });
//             }}
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </a>
//         </span>
//       </div>
//     </div>
//   );
// }

// export default Signup;









// updated code that is for the deployment 

import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "https://tradebackend-pc2r.onrender.com";
  const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || "https://trade-dashboard-36vd.onrender.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      if (isLogin) {
        // Login
        const res = await axios.post(`${BACKEND_URL}/api/auth/login`, {
          email: formData.email,
          password: formData.password,
        });

        localStorage.setItem("user", JSON.stringify(res.data.user));
        setMessage("Login successful! Redirecting to dashboard...");

        setTimeout(() => {
          window.location.href = DASHBOARD_URL;
        }, 1500);
      } else {
        // Signup
        await axios.post(`${BACKEND_URL}/api/auth/signup`, formData);
        setMessage("Signup successful! You can now login.");
        setFormData({ username: "", email: "", password: "" });
        setIsLogin(true);
      }
    } catch (err) {
      setMessage(err.response?.data?.error || "Operation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home_page">
      <div className="form_container">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        {message && (
          <div className={message.includes("successful") ? "success-msg" : "error-msg"}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <span style={{ marginTop: "1rem", display: "block", textAlign: "center" }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <a
            href="#!"
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
              setFormData({ username: "", email: "", password: "" });
            }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </a>
        </span>
      </div>
    </div>
  );
}

export default Signup;
