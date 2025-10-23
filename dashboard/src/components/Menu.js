// import React, { useState } from "react";

// import { Link } from "react-router-dom";

// const Menu = () => {
//   const [selectedMenu, setSelectedMenu] = useState(0);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

//   const handleMenuClick = (index) => {
//     setSelectedMenu(index);
//   };

//   const handleProfileClick = (index) => {
//     setIsProfileDropdownOpen(!isProfileDropdownOpen);
//   };

//   const menuClass = "menu";
//   const activeMenuClass = "menu selected";

//   return (
//     <div className="menu-container">
//       <img src="logo.png" style={{ width: "50px" }} alt="logoImage" />
//       <div className="menus">
//         <ul>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/"
//               onClick={() => handleMenuClick(0)}
//             >
//               <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
//                 Dashboard
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/orders"
//               onClick={() => handleMenuClick(1)}
//             >
//               <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
//                 Orders
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/holdings"
//               onClick={() => handleMenuClick(2)}
//             >
//               <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
//                 Holdings
//               </p>
//             </Link>

//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/positions"
//               onClick={() => handleMenuClick(3)}
//             >
//               <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
//                 Positions
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/funds"
//               onClick={() => handleMenuClick(4)}
//             >
//               <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
//                 Funds
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/apps"
//               onClick={() => handleMenuClick(5)}
//             >
//               <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
//                 Apps
//               </p>
//             </Link>
//           </li>
//         </ul>
//         <hr />
//         <div className="profile" onClick={handleProfileClick}>
//           <div className="avatar">ZU</div>
//           <p className="username">USERID</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "http://localhost:3001";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <>
      {/* Inline CSS styles */}
      <style>{`
        .menu-container {
          padding: 20px;
          width: 200px;
          background-color: #f9f9f9;
          font-family: Arial, sans-serif;
          position: relative;
        }
        .menu {
          color: #555;
          padding: 10px 0;
          margin: 0;
        }
        .menu.selected {
          font-weight: bold;
          color: #000;
        }
        .menus ul {
          list-style-type: none;
          padding: 0;
        }
        .menus li {
          margin-bottom: 10px;
        }
        .profile {
          display: flex;
          align-items: center;
          margin-top: 20px;
          cursor: pointer;
          position: relative;
        }
        .avatar {
          width: 40px;
          height: 40px;
          background-color: #007bff;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          margin-right: 10px;
        }
        .username {
          margin: 0;
          font-weight: 500;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 10px;
          background-color: white;
          border: 1px solid #ccc;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          width: 180px;
          z-index: 999;
          padding: 10px;
          border-radius: 4px;
        }
        .dropdown-text {
          font-size: 14px;
          color: #333;
          margin-bottom: 10px;
        }
        .dropdown-item {
          padding: 8px;
          background-color: #ff4d4f;
          color: white;
          text-align: center;
          border-radius: 4px;
          cursor: pointer;
        }
        .dropdown-item:hover {
          background-color: #d9363e;
        }
      `}</style>

      <div className="menu-container">
        <img src="logo.png" style={{ width: "50px" }} alt="logoImage" />
        <div className="menus">
          <ul>
            <li>
              <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
                <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
                <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
                <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
                <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
              </Link>
            </li>
             <li>
              <Link style={{ textDecoration: "none" }} to="/live" onClick={() => handleMenuClick(4)}>
                <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>LiveData</p>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(5)}>
                <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Funds</p>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(6)}>
                <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>Apps</p>
              </Link>
            </li>
          </ul>

          <hr />

          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">ZU</div>
            <p className="username">USERID</p>
          </div>

          {isProfileDropdownOpen && (
            <div className="dropdown-menu">
              <p className="dropdown-text">You want to logout?</p>
              <p className="dropdown-item" onClick={handleLogout}>
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
