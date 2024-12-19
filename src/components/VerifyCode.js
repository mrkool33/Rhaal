import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, FormGroup } from "react-bootstrap";
import illustration from "../assets/illustration4.png"; // Replace with your illustration path
import rectangleImage from "../assets/Rectangle.png"; // Replace with your rectangle image path
import logo from "../assets/logo.png"; // Replace with your logo path
import "./Login.css";
import { Label } from "reactstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const VerifyCode = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState();

  const location = useLocation();

  console.log("email: ", location.state?.email);

  const handleSetnewPassword = async (e) => {
    e.preventDefault();

    console.log("sdfkhaksjldfhkjlasdf");

    try {
      const response = await axios.post(
        "https://rhaal-server.onrender.com/verifyOtp",
        { email: location.state?.email, otpNumber: otp }
      );

      navigate("/SetnewPassword", { state: { email: location.state?.email } });
    } catch (error) {
      return error.response?.data?.message || "OTP verification failed";
    }
  };

  // useEffect(() => {
  //   if(user&&isSuccess)
  // {navigate('/SetnewPassword');

  // }})

  const handleBack = () => {
    navigate("/forgot-password");
  };

  return (
    <>
      <div
        onClick={handleBack}
        style={{
          position: "absolute", // Position in top-left corner
          top: "10px",
          left: "10px",
          cursor: "pointer",
          fontSize: "30px",
          color: "#F79E52",
        }}
      >
        <FaArrowAltCircleLeft />
      </div>
      <Container fluid className="signin-page">
        <Row className="h-100">
          {/* Left section - Form */}
          <Col
            md={6}
            className="left-section d-flex flex-column align-items-center justify-content-center"
          >
            <img src={logo} alt="Logo" className="logo" />
            <h2 className="welcome-title">Verify Code</h2>
            <Form className="form-container">
              <Form.Group controlId="formEmail" className="mb-4">
                <Form.Label className="form-label-left">Enter Code</Form.Label>
                <div className="input-icon">
                  <i className="fas fa-key"></i>
                  <Form.Control
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                  />
                </div>
                <button
                  className="signin-button"
                  onClick={handleSetnewPassword}
                >
                  Verify
                </button>
              </Form.Group>
            </Form>
          </Col>

          {/* Right section - Background Image with Illustration */}
          <Col
            md={6}
            className="right-section d-flex align-items-center justify-content-center"
          >
            <img
              src={rectangleImage}
              alt="Background Rectangle"
              className="background-image"
            />
            <div className="illustration-container">
              <img
                src={illustration}
                alt="Illustration"
                className="illustration"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VerifyCode;
