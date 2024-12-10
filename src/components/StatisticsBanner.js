import React from 'react';
import './StatisticsBanner.css';
import backgroundImage from '../assets/Salalah1.jpg'; // Replace with the path to your background image

const StatisticsBanner = () => {
  return (
    <div className="statistics-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="statistics-content">
        <div className="stat-item">
          <h2>20</h2>
          <p>Over Than Valleys</p>
        </div>
        <div className="divider"></div>
        <div className="stat-item">
          <h2>10</h2>
          <p>Hot Water Springs</p>
        </div>
        <div className="divider"></div>
        <div className="stat-item">
          <h2>5</h2>
          <p>More Than Cave Sites</p>
        </div>
        <div className="divider"></div>
        <div className="stat-item">
          <h2>150,000</h2>
          <p>Visitors Annually</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsBanner;
