import React from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../CartContext';

const ConfirmationPage = () => {
  const location = useLocation();
  const { cart } = useCart();
  const { formData } = location.state || {};

  return (
    <div className="confirmation-page">
      <h1>Thank You for Your Purchase!</h1>
      <p>Name: {formData.name}</p>
      <p>Address: {formData.address}</p>
      <p>Phone: {formData.phone}</p>
      <h2>Your Order:</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
            <span>Rs.{item.price} x {item.quantity}</span>
            <span>Total: Rs.{item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <p>Thank you for shopping with us!</p>
    </div>
  );
};

export default ConfirmationPage;
