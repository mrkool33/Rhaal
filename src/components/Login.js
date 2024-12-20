import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup } from "react-bootstrap";
import illustration from "../assets/illustration2.png"; // Replace with your illustration path
import rectangleImage from "../assets/Rectangle.png"; // Replace with your rectangle image path
import logo from "../assets/logo.png"; // Replace with your logo path
import "./Login.css";
import { Label } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { LoginValidations } from "../Validations/LoginValidations.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../Faetures/UserSlicer.js";
import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const SignIn = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isSuccess, isError, message } = useSelector(
    (state) => state.usersInfo
  );

  const {
    register,
    handleSubmit: submitForm,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginValidations) });

  const handleSubmit = () => {
    const user = { email: email, password: password };
    dispatch(GetUser(user));
  };
  useEffect(() => {
    if (user && isSuccess && message === "login") {
      navigate("/");
    }
    if (isError) {
      navigate("/login");
    }
  }, [isSuccess, isError, user, message, navigate]);

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
            <Form className="form-container">
              <Form.Group controlId="formEmail" className="mb-4">
                <Form.Label className="form-label-left">Email</Form.Label>
                <div className="input-icon">
                  <i className="fas fa-envelope"></i>
                  <Form.Control
                    type="email"
                    placeholder="email@gmail.com"
                    className="inputBox"
                    {...register("email", {
                      // value:{email},
                      onChange: (e) => setEmail(e.target.value),
                    })}
                    value={email}
                  />
                </div>
              </Form.Group>
              <Form.Group controlId="formPassword" className="mb-4">
                <Form.Label className="form-label-left">Password</Form.Label>
                <div className="input-icon">
                  <i className="fas fa-lock"></i>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    className="inputBox"
                    {...register("password", {
                      // value:{password},
                      onChange: (e) => setPassword(e.target.value),
                    })}
                    value={password}
                  />
                </div>
              </Form.Group>
              <a href="/forgot-password" className="forgot-password">
                Forgot Password?
              </a>
              <button
                className="signin-button"
                onClick={submitForm(handleSubmit)}
              >
                Login
              </button>
              <FormGroup className="signup-checkbox-group">
                <Label check className="signup-checkbox-label">
                  <span className="signup-text">
                    Don’t have an account?{" "}
                    <a onClick={navigate("/signup")} className="signup-link">
                      Sign up now
                    </a>
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
