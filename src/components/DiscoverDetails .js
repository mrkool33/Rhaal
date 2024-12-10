import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./DiscoverDetails.css";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DiscoverDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { destination } = location.state;

  const equipment = [
    { name: "Tent", price: "5 Riyal", image: "https://via.placeholder.com/100" },
    {
      name: "Life Jacket",
      price: "3 Riyal",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Waterproof Bag",
      price: "4 Riyal",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Sleeping Bag",
      price: "6 Riyal",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <>
    <Navbar />
    <Container className="discover-details">
      {/* Back Button */}
      <div className="back-button" onClick={() => navigate(-1)}>
        <span>← Back</span>
      </div>

      {/* Title Section */}
      <div className="title-section">
        <h1>{destination.state}</h1>
        <span className="rating">★★★★★{destination.rating}</span>
        <p className="location">📍 {destination.city}</p>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <img
          src={destination.url}
          alt={destination.state}
          className="main-image"
        />
      </div>

      {/* Overview Section */}
      <div className="overview-section">
        <h2>Overview</h2>
        <p>
          {destination.discrypter}
        </p>
      </div>

      {/* Location/Map Section */}
      <div className="map-section">
        <h2>Location/Map</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0594921577554!2d56.7485743!3d23.3908446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff4c7e55cb13%3A0x4c29c29029d5cc10!2sAin%20Al%20Kasfa!5e0!3m2!1sen!2som!4v1696551366922!5m2!1sen!2som"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Location Map"
        ></iframe>
        <Button className="orange-button mt-3">View on Google Maps</Button>
      </div>

      {/* Equipment Section */}
      <div className="equipment-section">
        <h2>Equipment for Rent</h2>
        <p>
          Gear up for your journey and everything you need to make your
          adventure fully prepared.
        </p>
        <Row>
          {equipment.map((item, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <Card className="equipment-card">
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.name}
                  className="equipment-image"
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Button className="orange-button">Check All Equipment</Button>
      </div>
    </Container>
    <Footer />
    </>
  );
};

export default DiscoverDetails;
