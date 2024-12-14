import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./DiscoverDetails.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { GetItem } from "../Faetures/itemsSlicer";

const DiscoverDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const equipment = useSelector((state) => state.items.Item);
  const { destination } = location.state;

  useEffect(() => {
    dispatch(GetItem());
  }, [dispatch]);

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
          <p>{destination.discrypter}</p>
        </div>

        {/* Location/Map Section */}
        <div className="map-section">
          <h2>Location/Map</h2>
          <iframe
            src={`https://maps.google.com/maps?q=${destination.lat},${destination.lng}&h1=es;&output=embed`}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
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
                    src={item.url}
                    alt={item.Iname}
                    className="equipment-image"
                  />
                  <Card.Body>
                    <Card.Title>{item.Iname}</Card.Title>
                    <Card.Text>{item.price} OMR</Card.Text>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default DiscoverDetails;
