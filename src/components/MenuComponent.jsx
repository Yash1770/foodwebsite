// src/components/MenuComponent.jsx
import React from 'react';
import '../styles/OurMenu.css';
import { useCart } from '../CartContext';

const OurMenu = () => {
    const { addItem } = useCart();

    const categories = [
        // Your existing category data with updated ids
    ];

    return (
        <div className="menu-container">
            {categories.map(category => (
                <div key={category.id} className="category-section">
                    <h2>{category.title}</h2>
                    <div className="menu-items">
                        {category.items.map(item => (
                            <div key={item.id} className="menu-item">
                                <div className="item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p>Rs.{item.price}</p>
                                    <button onClick={() => addItem(item)}>Add to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OurMenu;
