import React, { useState, useEffect } from 'react';
import '../styles/AdminPanel.css';

const NewOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch new orders from localStorage or API
    const fetchedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(fetchedOrders.filter(order => !order.isProcessed)); // Example condition
  }, []);

  return (
    <div className="admin-section">
      <h2>New Orders</h2>
      {orders.length === 0 ? (
        <p>No new orders.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <h3>Order {index + 1}</h3>
              <p><strong>Name:</strong> {order.name}</p>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Phone:</strong> {order.phone}</p>
              <p><strong>Total Amount:</strong> Rs.{order.total}</p>
              {/* Add buttons to process or reject orders */}
              <button>Process Order</button>
              <button>Reject Order</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewOrders;
