// src/pages/MyOrdersPage.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/MyOrderPage.css'

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Retrieve all orders from localStorage
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <> <Navbar/>
    <div className="my-orders-page">
      <h1>My Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div key={index} className="order-summary">
              <h2>Order {index + 1}</h2>
              <p><strong>Name:</strong> {order.name}</p>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Phone:</strong> {order.phone}</p>
              <h3>Order Details</h3>
              <ul>
                {order.cart.map(item => (
                  <li key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                    <span>Rs.{item.price}</span>
                    <span>Quantity: {item.quantity}</span>
                    <span>Total: Rs.{item.price * item.quantity}</span>
                  </li>
                ))}
              </ul>
              <h3>Total Amount: Rs.{order.total}</h3>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default MyOrdersPage;
