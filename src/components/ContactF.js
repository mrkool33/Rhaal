import React from 'react'
import "./ContactF.css"

import logo from '../assets/logo.png'; // Replace with your logo path
import image1 from '../assets/Daymaniyat.jpg'; // Replace with your first image path
import image2 from '../assets/Cave.jpg'; // Replace with your second image path
import image3 from '../assets/Salalah1.jpg'; // Replace with your third image path

export const ContactF = () => {
  return (
    <div className="contact-page">
    <header className="contact-header">
      <img src={logo} alt="Logo" className="contact-logo" />
    </header>
    <div className="contact-content">
      <div className="contact-info">
        <h2>DISCOVER US</h2>
        <p>Natural Therapeutic Tourism in Oman</p>

        <h3>VISIT US</h3>
        <p><a href="https://www.google.com/maps?q=Oman+Muscat" target="_blank" rel="noopener noreferrer">Oman - Muscat</a></p>

        <p>Feel free to get in touch with us through our channels:</p>
        
        <h3>EMAIL US</h3>
        <p><a href="mailto:sulaiman.rahaal@gmail.com">sulaiman.rahaal@gmail.com</a></p>

        <h3>CALL US</h3>
        <p><a href="tel:+96892004175">+968 92004175</a></p>
      </div>

      <div className="contact-images">
  <img src={image1} alt="Scenic view 1" className="contact-image" />
  <img src={image2} alt="Scenic view 2" className="contact-image" />
  <img src={image3} alt="Scenic view 3" className="contact-image" />
````</div>
    </div>
    
    <div className="contact-map">
      <iframe
        title="Oman Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31749.798084659274!2d58.51972901955156!3d23.61061587228974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ed5e0b5da4e3d%3A0x5f1b7f4dbd7c450e!2sMuscat%2C%20Oman!5e0!3m2!1sen!2s!4v1628239920785!5m2!1sen!2s"
        width="100%"
        height="400"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
  )
}
