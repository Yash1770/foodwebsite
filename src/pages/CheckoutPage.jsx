// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import '../styles/CheckoutPage.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    const orderDetails = {
      name,
      address,
      phone,
      cart,
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    };

    // Retrieve existing orders and add new order
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    existingOrders.push(orderDetails);

    // Save updated orders to localStorage
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    // Clear cart after purchase
    clearCart();

    // Generate an order number (e.g., based on timestamp or random)
    const orderNumber = new Date().getTime();

    // Navigate to thank you page with state
    navigate('/thank-you', { state: { name, orderNumber } });
  };

  return (
    <>
    <Navbar/>
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <button onClick={handleConfirmOrder}>Confirm & Buy Now</button>
    </div>
    <Footer/>
    </>
  );
};

export default CheckoutPage;
