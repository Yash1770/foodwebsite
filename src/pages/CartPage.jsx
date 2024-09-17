import React from 'react';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/CartPage.css'

const CartPage = () => {
  const { cart, removeItem, increaseQuantity, decreaseQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <>
       <Navbar/>
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
       
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
                <span>Rs.{item.price}</span>
                <div>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <span>Total: Rs.{item.price * item.quantity}</span>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={handleCheckout} className='lastbutton'>Proceed to Checkout</button>
          <button onClick={clearCart}className='clearcart'>Clear Cart</button>
        </div>
      )}
      <Footer/>
    </div>
    </>
  );
};

export default CartPage;
