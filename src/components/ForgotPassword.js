import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendVerification } from "../Faetures/UserSlicer.js";
import illustration from "../assets/illustration3.png";
import rectangleImage from "../assets/Rectangle.png";
import logo from "../assets/logo.png";
import "./Login.css";
import axios from "axios";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isSuccess, isError } = useSelector((state) => state.usersInfo);

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post(
        "https://rhaal-server.onrender.com/sendVerification",
        {
          email: email,
        }
      );

      navigate("/Verify-Code", { state: { email } });

      // return response.data.user.message;  // Return response data of user only
    } catch (error) {
      alert("invalid crednashals" + error);
    }
  };

  useEffect(() => {
    if (user && isSuccess) {
      navigate("/Verify-Code");
    }
  }, [isSuccess, user, navigate]);

  const handleBack = () => {
    navigate("/login");
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
            <h2 className="welcome-title">Forgot Your Password?</h2>
            <Form className="form-container" onSubmit={handleVerifyCode}>
              <Form.Group class controlId="formEmail" className="mb-4">
                <Form.Label className="form-label-left">
                  Enter Your Email
                </Form.Label>
                <div className="input-icon">
                  <Col>
                    <Form.Control
                      type="email"
                      placeholder="email@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{ width: "100%", padding: "10px", md: "8" }}
                    />
                  </Col>
                </div>
                <button className="signin-button" type="submit">
                  Submit
                </button>
                {isError && (
                  <p className="error-message">
                    Failed to send verification email. Please try again.
                  </p>
                )}
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

export default ForgotPassword;
