// src/Navbar.js
import React, { useState } from 'react';
import '../styles/Navbar.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext'; // Import the CartContext

const Navbar = () => {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
    const { cart } = useCart(); // Use the CartContext to get cart items

    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (index) => {
        setActiveMenu(index === activeMenu ? null : index);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to={'/'}><img src="https://static.vecteezy.com/system/resources/thumbnails/019/607/567/small_2x/fast-food-vector-clipart-design-graphic-clipart-design-free-png.png" alt="Logo" /></Link>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to={'/'}>Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/menupage">Menu</Link>
                </li>
                <li className="nav-item">
                <Link to="/AdminPage">Admin</Link>
                </li>
                {/* <li className="nav-item">
                <Link to="/menu">Oder Now</Link>
                   
                </li> */}
                <li className="nav-item">
                <Link to="/my-orders">My Orders</Link>
                   
                </li>
            </ul>
            <div className="navbar-search">
                <input type="text" placeholder="Search" />
                <a href="#" className="search-button">Search</a>
            </div>
            <div className="navbar-actions">
                {isAuthenticated ? (
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="Logout-button">
                        Log Out
                    </button>
                ) : (
                    <button onClick={() => loginWithRedirect()} className="signin-button">
                        Sign In
                    </button>
                )}
              
                <Link to="/cart">
            <div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" className="bi bi-handbag-fill" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z"/>
                    </svg>
                    {cart.length> 0 && <sup className='cart-count'>{cart.length}</sup>}
        
                 
            </div>
           
                   
              
                   
                </Link>
                    
                
            </div>
        </nav>
    );
};

export default Navbar;
