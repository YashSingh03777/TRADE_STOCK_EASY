// import React from "react";
// import { Link } from "react-router-dom";

// const Funds = () => {
//   return (
//     <>
//       <div className="funds">
//         <p>Instant, zero-cost fund transfers with UPI </p>
//         <Link className="btn btn-green">Add funds</Link>
//         <Link className="btn btn-blue">Withdraw</Link>
//       </div>

//       <div className="row">
//         <div className="col">
//           <span>
//             <p>Equity</p>
//           </span>

//           <div className="table">
//             <div className="data">
//               <p>Available margin</p>
//               <p className="imp colored">4,043.10</p>
//             </div>
//             <div className="data">
//               <p>Used margin</p>
//               <p className="imp">3,757.30</p>
//             </div>
//             <div className="data">
//               <p>Available cash</p>
//               <p className="imp">4,043.10</p>
//             </div>
//             <hr />
//             <div className="data">
//               <p>Opening Balance</p>
//               <p>4,043.10</p>
//             </div>
//             <div className="data">
//               <p>Opening Balance</p>
//               <p>3736.40</p>
//             </div>
//             <div className="data">
//               <p>Payin</p>
//               <p>4064.00</p>
//             </div>
//             <div className="data">
//               <p>SPAN</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Delivery margin</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Exposure</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Options premium</p>
//               <p>0.00</p>
//             </div>
//             <hr />
//             <div className="data">
//               <p>Collateral (Liquid funds)</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Collateral (Equity)</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Total Collateral</p>
//               <p>0.00</p>
//             </div>
//           </div>
//         </div>

//         <div className="col">
//           <div className="commodity">
//             <p>You don't have a commodity account</p>
//             <Link className="btn btn-blue">Open Account</Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Funds;


import React, { useState } from "react";
import "./style.css";

// ✅ Modal Component
const Modal = ({ title, onClose, onSubmit }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-group">
            <label>PAN Number</label>
            <input type="text" name="pan" required />
          </div>
          <div className="form-group">
            <label>Aadhaar Number</label>
            <input type="text" name="aadhaar" required />
          </div>
          <div className="form-group">
            <label>Upload PAN Card</label>
            <input type="file" name="panUpload" required />
          </div>
          <div className="modal-actions">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ✅ Main Component
const Funds = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (title) => {
    setModalTitle(title);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`${modalTitle} request submitted successfully!`);
    setShowModal(false);
  };

  return (
    <div className="funds-container">
      <h1>Manage Your Funds</h1>
      <p>Instant, zero-cost transfers via UPI and more</p>

      <div className="btn-group">
        <button className="btn btn-primary" onClick={() => openModal("Add Funds")}>
          Add Funds
        </button>
        <button className="btn btn-primary" onClick={() => openModal("Withdraw Funds")}>
          Withdraw Funds
        </button>
        <button className="btn btn-primary" onClick={() => openModal("Open Commodity Account")}>
          Open Commodity Account
        </button>
      </div>

      <div className="funds-info">
        <div className="funds-box">
          <h3>Equity</h3>
          <p><strong>Available Margin:</strong> ₹4,043.10</p>
          <p><strong>Used Margin:</strong> ₹3,757.30</p>
          <p><strong>Available Cash:</strong> ₹4,043.10</p>
        </div>
        <div className="funds-box">
          <h3>Other Details</h3>
          <p><strong>Payin:</strong> ₹4,064.00</p>
          <p><strong>Delivery Margin:</strong> ₹0.00</p>
          <p><strong>Collateral (Liquid Funds):</strong> ₹0.00</p>
        </div>
      </div>

      {showModal && (
        <Modal title={modalTitle} onClose={closeModal} onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default Funds;
