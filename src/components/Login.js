import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "react-bootstrap";
import illustration from "../assets/illustration2.png"; // Replace with your illustration path
import rectangleImage from "../assets/Rectangle.png"; // Replace with your rectangle image path
import logo from "../assets/logo.png"; // Replace with your logo path
import "./Login.css";
import { Label } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { LoginValidations } from "../Validations/LoginValidations.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../Faetures/UserSlicer.js";
import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isError, message } = useSelector(
    (state) => state.usersInfo
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginValidations),
  });

  const onSubmit = (data) => {
    dispatch(GetUser(data))
      .unwrap()
      .catch((errorMessage) => {
        console.error("Login failed:", errorMessage);
      });
  };

  useEffect(() => {
    if (isSuccess && message === "login") {
      navigate("/");
    }
  }, [isSuccess, message, navigate]);
  const handleBack = () => {
    navigate("/");
  };
  return (
    <>
      <div
        onClick={handleBack}
        style={{
          position: "absolute",
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
            <h2 className="welcome-title">Welcome Back!!</h2>
            <Form className="form-container" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formEmail" className="mb-4">
                <Form.Label className="form-label-left">Email</Form.Label>
                <div className="input-icon">
                  <i className="fas fa-envelope"></i>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className={errors.email ? "is-invalid" : ""}
                    {...register("email")}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>
                </div>
              </Form.Group>
              <Form.Group controlId="formPassword" className="mb-4">
                <Form.Label className="form-label-left">Password</Form.Label>
                <div className="input-icon">
                  <i className="fas fa-lock"></i>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    className={errors.password ? "is-invalid" : ""}
                    {...register("password")}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <div className="invalid-feedback">
                    {errors.password?.message}
                  </div>
                </div>
              </Form.Group>
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
              <Button type="submit" className="signin-button">
                Login
              </Button>
              {isError && <p className="error">Error: {message}</p>}
              <FormGroup className="signup-checkbox-group">
                <Label check className="signup-checkbox-label">
                  <span className="signup-text">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="signup-link">
                      Sign up now
                    </Link>
                  </span>
                </Label>
              </FormGroup>
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

export default SignIn;
