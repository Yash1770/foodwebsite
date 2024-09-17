// src/components/MenuManager.js
import React, { useState } from 'react';
import OurMenu from './OurMenu';
import AddMenuItem from './AddMenuItem';

const initialCategories = [
    {
        id: 1,
        title: 'Starters',
        items: [
            { id: 11, name: 'PYAJ PAKODA', price: 80, image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vegrecipesofindia.com%2Faloo-pakora-aloo-bajji%2F&psig=AOvVaw17VL9akZSy-9lCmFsHOgPy&ust=1723353543073000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCOjB_bXW6YcDFQAAAAAdAAAAABAE' },
            { id: 12, name: 'PANEER PAKODA', price: 100, image: 'https://pipingpotcurry.com/wp-content/uploads/2022/10/Paneer-Pakora-Recipe-Piping-Pot-Curry.jpg' },
            { id: 13, name: 'ALOO PAKODA', price: 70, image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/aloo-pakora-3-500x500.jpg' },
            { id: 14, name: 'MIX PAKODA', price: 70, image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/aloo-pakora-3-500x500.jpg' },
            { id: 15, name: 'FRENCH FRIES', price: 70, image: 'https://example.com/french-fries.jpg' },
            { id: 16, name: 'PANEER TIKKA', price: 200, image: 'https://example.com/paneer-tikka.jpg' },
            { id: 17, name: 'PASTA MACARONI DRY', price: 170, image: 'https://example.com/pasta-macaroni.jpg' },
            { id: 18, name: 'BREAD PAKORA', price: 25, image: 'https://example.com/bread-pakora.jpg' },
            { id: 19, name: 'VEG ROLL', price: 50, image: 'https://example.com/veg-roll.jpg' },
        ],
    },
    {
        id: 2,
        title: 'Breakfast',
        items: [
            { id: 21, name: 'POHA', price: 40, image: 'https://example.com/poha.jpg' },
            { id: 22, name: 'UPMA', price: 40, image: 'https://example.com/upma.jpg' },
            { id: 23, name: 'CHOLA BHATURA', price: 80, image: 'https://example.com/chola-bhatura.jpg' },
            { id: 24, name: 'PURI BHAJI', price: 60, image: 'https://example.com/puri-bhaji.jpg' },
            { id: 25, name: 'SAMOSA 2 PCS', price: 20, image: 'https://example.com/samosa.jpg' },
            { id: 26, name: 'SAMOSA CHHOLA 2 PCS', price: 40, image: 'https://example.com/samosa-chhola.jpg' },
            { id: 27, name: 'KACHORI 2 PCS', price: 40, image: 'https://example.com/kachori.jpg' },
        ],
    },
    {
        id: 3,
        title: 'Sandwich/Burger',
        items: [
            { id: 31, name: 'VEG SANDWICH', price: 70, image: 'https://example.com/veg-sandwich.jpg' },
            { id: 32, name: 'CHEESE SANDWICH', price: 80, image: 'https://example.com/cheese-sandwich.jpg' },
            { id: 33, name: 'VEG GRILLED CHEESE SANDWICH', price: 95, image: 'https://example.com/veg-grilled-cheese.jpg' },
            { id: 34, name: 'PANEER TIKKA SANDWICH', price: 120, image: 'https://example.com/paneer-tikka-sandwich.jpg' },
            { id: 35, name: 'PANEER SANDWICH', price: 90, image: 'https://example.com/paneer-sandwich.jpg' },
        ],
    },
    {
        id: 4,
        title: 'Noodles',
        items: [
            { id: 41, name: 'VEG CHOWMEIN', price: 145, image: 'https://example.com/veg-chowmein.jpg' },
            { id: 42, name: 'CHILLI GARLIC NOODLES', price: 160, image: 'https://example.com/chilli-garlic-noodles.jpg' },
            { id: 43, name: 'SZECHWAN NOODLE', price: 140, image: 'https://example.com/szechwan-noodle.jpg' },
        ],
    },
];

const MenuManager = () => {
    const [categories, setCategories] = useState(initialCategories);

    const handleAddItem = (newItem) => {
        const newCategories = categories.map(category => {
            if (category.title === newItem.category) {
                return {
                    ...category,
                    items: [
                        ...category.items,
                        { id: category.items.length + 1, name: newItem.title, price: newItem.price, image: newItem.image }
                    ]
                };
            }
            return category;
        });

        setCategories(newCategories);
    };

    return (
        <div>
            <AddMenuItem onAddItem={handleAddItem} />
            <OurMenu categories={categories} />
        </div>
    );
};

export default MenuManager;
