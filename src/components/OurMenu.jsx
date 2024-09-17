// src/components/OurMenu.js
import React from 'react';
import '../styles/OurMenu.css';
import { useCart } from '../CartContext';

const OurMenu = () => {
    const { addToCart } = useCart();

    // Dummy data for menu items
    const categories = [
        {
            id: 1,
            title: 'Starters',
            items: [
                { id: 11, name: 'PYAJ PAKODA', price: 80, image: 'https://ministryofcurry.com/wp-content/uploads/2021/10/Onion-Pakodas-2.jpgs' },
                { id: 12, name: 'PANEER PAKODA', price: 100, image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/aloo-pakora-3-500x500.jpg' },
                { id: 13, name: 'ALOO PAKODA', price: 70, image: 'path/to/image3.jpg' },
                { id: 14, name: 'MIX PAKODA', price: 70, image: 'path/to/image4.jpg' },
                { id: 15, name: 'FRENCH FRIES', price: 70, image: 'path/to/image5.jpg' },
                { id: 16, name: 'PANEER TIKKA', price: 200, image: 'path/to/image6.jpg' },
                { id: 17, name: 'PASTA MACARONI DRY', price: 170, image: 'path/to/image7.jpg' },
                { id: 18, name: 'BREAD PAKORA', price: 25, image: 'path/to/image8.jpg' },
                { id: 19, name: 'VEG ROLL', price: 50, image: 'path/to/image9.jpg' },
            ],
        },
        {
            id: 2,
            title: 'Breakfast',
            items: [
                { id: 21, name: 'POHA', price: 40, image: 'path/to/image10.jpg' },
                { id: 22, name: 'UPMA', price: 40, image: 'path/to/image11.jpg' },
                { id: 23, name: 'CHOLA BHATURA', price: 80, image: 'path/to/image12.jpg' },
                { id: 24, name: 'PURI BHAJI', price: 60, image: 'path/to/image13.jpg' },
                { id: 25, name: 'SAMOSA 2 PCS', price: 20, image: 'path/to/image14.jpg' },
                { id: 26, name: 'SAMOSA CHHOLA 2 PCS', price: 40, image: 'path/to/image15.jpg' },
                { id: 27, name: 'KACHORI 2 PCS', price: 40, image: 'path/to/image16.jpg' },
            ],
        },
        {
            id: 3,
            title: 'Sandwich/Burger',
            items: [
                { id: 31, name: 'VEG SANDWICH', price: 70, image: 'path/to/image17.jpg' },
                { id: 32, name: 'CHEESE SANDWICH', price: 80, image: 'path/to/image18.jpg' },
                { id: 33, name: 'VEG GRILLED CHEESE SANDWICH', price: 95, image: 'path/to/image19.jpg' },
                { id: 34, name: 'PANEER TIKKA SANDWICH', price: 120, image: 'path/to/image20.jpg' },
                { id: 35, name: 'PANEER SANDWICH', price: 90, image: 'path/to/image21.jpg' },
            ],
        },
        {
            id: 4,
            title: 'Noodles',
            items: [
                { id: 41, name: 'VEG CHOWMEIN', price: 145, image: 'path/to/image22.jpg' },
                { id: 42, name: 'CHILLI GARLIC NOODLES', price: 160, image: 'path/to/image23.jpg' },
                { id: 43, name: 'SZECHWAN NOODLE', price: 140, image: 'path/to/image24.jpg' },
            ],
        },
    ];

    const handleAddToCart = (item) => {
        addToCart(item);
    };

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
                                    <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
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
