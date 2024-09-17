

// src/pages/MyOrderPage.jsx
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MyOrderPage = () => {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Load order details from localStorage
    const storedOrderDetails = JSON.parse(localStorage.getItem('orderDetails'));
    setOrderDetails(storedOrderDetails);
  }, []);

  return (
    <>
    <Navbar/>
    <div className="my-order-page">
      {orderDetails ? (
        <div>
          <h1>Thank You, {orderDetails.name}!</h1>
          <h2>Your Order Summary</h2>
          <p><strong>Address:</strong> {orderDetails.address}</p>
          <p><strong>Phone:</strong> {orderDetails.phone}</p>
          <h3>Order Details</h3>
          <ul>
            {orderDetails.cart.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
                <span>Rs.{item.price}</span>
                <span>Quantity: {item.quantity}</span>
                <span>Total: Rs.{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <h3>Total Amount: Rs.{orderDetails.total}</h3>
          <p>Thank you for your purchase!</p>
        </div>
      ) : (
        <p>No order details found.</p>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default MyOrderPage;
