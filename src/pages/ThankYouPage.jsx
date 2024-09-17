
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/ThankYouPage.css'; // Import the CSS file
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ThankYouPage = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <>
    <Navbar/>
    <div className="thank-you-page">
      <h1>Thank You for Your Purchase, {state?.name}!</h1>
      <p>We appreciate your order. Your purchase details have been saved.</p>
      <p>Your order number is: {state?.orderNumber}</p>
      
      {/* Additional message */}
      <div className="pre-delivery-message">
        <h2>Pre-Delivery Instructions</h2>
        <p>
          Please ensure that someone is available to receive your delivery at the provided address. 
          Make sure to check that all items in your order are present and correct upon delivery. 
          If you have any issues or need to make changes, contact us immediately.
        </p>
        <p>
          For any questions or further assistance, please reach out to our support team.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ThankYouPage;

