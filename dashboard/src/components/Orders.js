// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./Orders.css"; // Import CSS from separate file

// const Orders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetchOrders();
//   }, []);



//   const fetchOrders = async () => {
//     try {
//       const response = await axios.get("http://localhost:3002/allOrders");
//       setOrders(response.data);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   return (
//     <div className="orders">
//       {orders.length === 0 ? (
//         <div className="no-orders">
//           <p>You haven't placed any orders today</p>
//           <Link to="/" className="btn">
//             Get started
//           </Link>
//         </div>
//       ) : (
//         <div className="order-list">
//           <h2>Your Orders</h2>
//           <table className="orders-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Quantity</th>
//                 <th>Price</th>
//                 <th>Mode</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order._id}>
//                   <td>{order._id}</td>
//                   <td>{order.name}</td>
//                   <td>{order.qty}</td>
//                   <td>{order.price}</td>
//                   <td>{order.mode}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Orders.css"; // Import CSS from separate file

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchOrders();

    // ✅ Poll every 5 seconds to auto-refresh orders
    const interval = setInterval(fetchOrders, 5000);
    return () => clearInterval(interval); // cleanup
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3002/allOrders");
        // const response = await axios.get(`$(BASE_URL)/allOrders`);
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="order-list">
          <div className="orders-header">
            <h2>Your Orders</h2>
            <button onClick={fetchOrders} className="btn refresh-btn">
              {loading ? "Refreshing..." : "Refresh"}
            </button>
          </div>

          <table className="orders-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td>{order.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
