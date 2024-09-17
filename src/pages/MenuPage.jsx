import React from 'react';
import OurMenu from '../components/OurMenu';
import { useCart } from '../CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MenuPage = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <Navbar/>
      <h1>Menu</h1>
      <OurMenu addToCart={addToCart} />
      <Footer/>
    </div>
  );
};

export default MenuPage;
