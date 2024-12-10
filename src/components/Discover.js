import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Discover.css"; 
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Discover = () => {
  const destinations = [
    {
      name: "Al-Mughsail Beach",
      image: "https://via.placeholder.com/150",
      rating: "4.7",
      category: "Beach",
    },
    {
      name: "Sifah Beach",
      image: "https://via.placeholder.com/150",
      rating: "4.9",
      category: "Beach",
    },
    {
      name: "Qurum Beach",
      image: "https://via.placeholder.com/150",
      rating: "4.5",
      category: "Beach",
    },
    {
      name: "Ras Al Jinz Beach",
      image: "https://via.placeholder.com/150",
      rating: "4.9",
      category: "Beach",
    },
  ];

  return (
    <>
    <Navbar />
    <div className="beach-page">
      {/* Header Section */}
      <div className="header-section">
        <div className="overlay">
          <Container>
            <h1 className="header-title">Discover Natural Therapeutic in Oman</h1>
            <Form className="search-form">
              <Form.Control
                type="text"
                placeholder="Search destinations"
                className="search-input"
              />
              <Button className="search-button">Search</Button>
            </Form>
          </Container>
        </div>
      </div>

      {/* Beach Destinations Section */}
      <Container className="content-section">
        <br/> <br/>
        <h3 className="section-title">Beach Destinations</h3>
        <Row>
          {destinations.map((destination, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <Card className="destination-card">
                <Card.Img
                  variant="top"
                  src={destination.image}
                  alt={destination.name}
                  className="destination-image"
                />
                <Card.Body>
                  <Card.Title>{destination.name}</Card.Title>
                  <Card.Text>
                    <span>⭐ {destination.rating}</span>
                    <br />
                    <span>Category: {destination.category}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    
    <Footer />
    </>
  );
};

export default Discover;
