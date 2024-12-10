import React from 'react'
import "./AboutUs.css"
import waterfallImage from '../assets/about1.png'; // Replace with your image path
import caveImage from '../assets/about2.png'; // Replace with your image path
const AboutUs = () => {
  return (
    <div className="about-section">
    <div className="about-column">
      <h4 className="about-subtitle">Who We Are</h4>
      <h2 className="about-title">Who We Are</h2>
      <p className="about-description">
        We are a passionate team of tourism enthusiasts and nature lovers committed to showcasing the unique therapeutic offerings of Oman. Our diverse backgrounds in tourism, environmental science, and technology empower us to create a platform that not only highlights the beauty of Oman’s natural landscapes but also promotes wellness through nature. We believe in the healing power of the environment and strive to connect individuals with the therapeutic experiences that Oman has to offer.
      </p>
      <img src={waterfallImage} alt="Waterfall" className="about-image" />
    </div>
    <div className="about-column">
      <h4 className="about-subtitle">Why Us</h4>
      <h2 className="about-title">Why Us</h2>
      <p className="about-description">
        Choosing our platform means opting for a holistic approach to therapeutic tourism. We provide a user-friendly interface that makes exploring natural sites and renting equipment effortless. Our commitment to quality ensures that all listed suppliers are vetted, providing you with peace of mind during your visits. We are dedicated to enhancing your experience with detailed information, personalized recommendations, and a supportive community. Join us in discovering the therapeutic treasures of Oman and embark on a journey towards wellness and rejuvenation.
      </p>
      <img src={caveImage} alt="Cave" className="about-image" />
    </div>
  </div>
  )
}

export default AboutUs