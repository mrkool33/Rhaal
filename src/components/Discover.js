import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Discover.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { GetLocation } from "../Faetures/locationSlicer";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state.locations.location);
  const navigate = useNavigate();
  const handleCardClick = (destination) => {
    navigate(`/discoverdetaisls/${destination.id}`, { state: { destination } });
  };
  //filter the output to show only destination
  const filteredDestinations = destinations.filter(
    (destination) => destination.category === "Beaches"
  );
  const filteredDestinationsMountains = destinations.filter(
    (destination) => destination.category === "Mountains"
  );
  const filteredDestinationsCaves = destinations.filter(
    (destination) => destination.category === "Caves"
  );
  const filteredDestinationsHotSprings = destinations.filter(
    (destination) => destination.category === "Hot Springs"
  );

  const filteredDestinationsDesertnature = destinations.filter(
    (destination) => destination.category === "Desert nature"
  );
  useEffect(() => {
    dispatch(GetLocation());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <div className="beach-page">
        {/* Header Section */}
        <div className="header-section">
          <div className="overlay">
            <Container>
              <h1 className="header-title">
                Discover Natural Therapeutic in Oman
              </h1>
              {/* 
              <Form className="search-form">
                <Form.Control
                  type="text"
                  placeholder="Search destinations"
                  className="search-input"
                />
                 <Button className="search-button">Search</Button>
              </Form>*/}
            </Container>
          </div>
        </div>

        {/* Beach Destinations Section */}
        <Container className="content-section">
          <br /> <br />
          <h3 className="section-title">Beach Destinations</h3>
          <Row>
            {filteredDestinations.map((destination) => (
              <Col md={3} sm={6} key={destination._id} className="mb-4">
                <Card
                  className="destination-card"
                  onClick={() => handleCardClick(destination)}
                >
                  <Card.Img
                    variant="top"
                    src={destination.url}
                    alt={destination.state}
                    className="destination-image"
                  />
                  <Card.Body>
                    <Card.Title>{destination.state}</Card.Title>
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
        {/* mountains Destinations Section */}
        <Container className="content-section">
          <br /> <br />
          <h3 className="section-title">Mountains Destinations</h3>
          <Row>
            {filteredDestinationsMountains.map((destination) => (
              <Col md={3} sm={6} key={destination._id} className="mb-4">
                <Card
                  className="destination-card"
                  onClick={() => handleCardClick(destination)}
                >
                  <Card.Img
                    variant="top"
                    src={destination.url}
                    alt={destination.state}
                    className="destination-image"
                  />
                  <Card.Body>
                    <Card.Title>{destination.state}</Card.Title>
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
        {/* Caves Destinations Section */}
        <Container className="content-section">
          <br /> <br />
          <h3 className="section-title">Caves Destinations</h3>
          <Row>
            {filteredDestinationsCaves.map((destination) => (
              <Col md={3} sm={6} key={destination._id} className="mb-4">
                <Card
                  className="destination-card"
                  onClick={() => handleCardClick(destination)}
                >
                  <Card.Img
                    variant="top"
                    src={destination.url}
                    alt={destination.state}
                    className="destination-image"
                  />
                  <Card.Body>
                    <Card.Title>{destination.state}</Card.Title>
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
        {/* Caves Destinations Section */}
        <Container className="content-section">
          <br /> <br />
          <h3 className="section-title">Desert nature</h3>
          <Row>
            {filteredDestinationsDesertnature.map((destination) => (
              <Col md={3} sm={6} key={destination._id} className="mb-4">
                <Card
                  className="destination-card"
                  onClick={() => handleCardClick(destination)}
                >
                  <Card.Img
                    variant="top"
                    src={destination.url}
                    alt={destination.state}
                    className="destination-image"
                  />
                  <Card.Body>
                    <Card.Title>{destination.state}</Card.Title>
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
        {/* Historical Sites Destinations Section */}
        <Container className="content-section">
          <br /> <br />
          <h3 className="section-title">Hot Springs</h3>
          <Row>
            {filteredDestinationsHotSprings.map((destination) => (
              <Col md={3} sm={6} key={destination._id} className="mb-4">
                <Card
                  className="destination-card"
                  onClick={() => handleCardClick(destination)}
                >
                  <Card.Img
                    variant="top"
                    src={destination.url}
                    alt={destination.state}
                    className="destination-image"
                  />
                  <Card.Body>
                    <Card.Title>{destination.state}</Card.Title>
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
