import React from 'react';
import '../styles/Category.css';

const categories = [
  { name: 'Pizza', image: 'https://images.pexels.com/photos/11111603/pexels-photo-11111603.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Burger', image: 'https://images.pexels.com/photos/20722043/pexels-photo-20722043/free-photo-of-a-burger-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Shushi', image: 'https://en.bentoandco.com/cdn/shop/products/803682-Yamaco-Sushimold-Square12_0b967d14-20cc-4245-8972-000f7fcb0ef9.jpg?v=1696580197' },
  { name: 'Salad', image: 'https://media.istockphoto.com/id/528424672/photo/garden-salad.jpg?s=612x612&w=0&k=20&c=ebCO5Fo0H50LrrLFQrP_5lcqHqVLgZ056CJxQSG-45c=' },
  { name: 'Pasta', image: 'https://images.pexels.com/photos/15820588/pexels-photo-15820588/free-photo-of-noodles-with-mushrooms.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Dessert', image: 'https://img.freepik.com/premium-photo/beautiful-bread-pudding-square-tasty-dessert-clipart-illustration_962764-13330.jpg' },
];

const CategoryGrid = () => {
  return (
    <div className="category-grid">
      {categories.map((category, index) => (
        <div className="category-item" key={index}>
          <img src={category.image} alt={category.name} className="category-image" />
          <h3 className="category-name">{category.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
