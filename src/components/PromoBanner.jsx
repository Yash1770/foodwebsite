import React from 'react';

import { Link } from 'react-router-dom';
import '../styles/PromoBanner.css'

const PromoBanner = () => {
    return (
        <div className="main-banner">
            <div className="banner-content">
            <h1>Discover Our Delicious Food! </h1>
                <h1>Are You Hungry?</h1>
                <p>Don't wait,<br/> Order food now and get up to 50% off !</p>
                <div className="cta-buttons">
                    <Link to={'/menupage'} className="cta-button orange-bg">Order Now</Link>
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;
