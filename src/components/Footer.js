import React from 'react';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      {/* Top Section */}
      <div className='footer-top'>
        <img src={logo} className='footer-logo' alt='Logo' />
      </div>

      {/* Center Links */}
      <div className='footer-links'>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
        <a href='/discover'>Discover</a>
      </div>

      {/* Bottom Section */}
      <div className='footer-bottom'>
        <div className='footer-icons'>
          <a href='/'><i className='fa-brands fa-facebook'></i></a>
          <a href='/'><i className='fa-brands fa-twitter'></i></a>
          <a href='/'><i className='fa-brands fa-telegram'></i></a>
          <a href='/'><i className='fa-brands fa-instagram'></i></a>
        </div>
        <div className='footer-legal'>
          <a href='#!'>Privacy Policy</a>
          <a href='#!'>Terms of Use</a>
          <a href='#!'>Sales and Refunds</a>
          <a href='#!'>Legal</a>
          <a href='#!'>Site Map</a>
        </div>
      </div>

      {/* Copyright */}
      <div className='footer-copyright'>
        <p>&copy; Rahaal 2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
