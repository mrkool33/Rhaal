import React from 'react';
import './Categories.css';
import hotSpringsIcon from '../assets/hotspring.png'; // Replace with the actual path
import mountainsIcon from '../assets/mountain.jpg'; // Replace with the actual path
import beachesIcon from '../assets/beach.png'; // Replace with the actual path
import cavesIcon from '../assets/caves.png'; // Replace with the actual path
import desertIcon from '../assets/desert.png'; // Replace with the actual path

const categories = [
  { id: 1, name: 'Hot Springs', icon: hotSpringsIcon },
  { id: 2, name: 'Mountains', icon: mountainsIcon },
  { id: 3, name: 'Beaches', icon: beachesIcon },
  { id: 4, name: 'Caves', icon: cavesIcon },
  { id: 5, name: 'Desert Nature', icon: desertIcon },
];

const Categories = () => {
  return (
    <div className="categories-section">
      <h2 className="categories-title">Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.icon} alt={category.name} className="category-icon" />
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
