import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Form, } from 'react-bootstrap';
import illustration from '../assets/illustration5.png'; // Replace with your illustration path
import rectangleImage from '../assets/Rectangle.png'; // Replace with your rectangle image path
import logo from '../assets/logo.png'; // Replace with your logo path
import './Login.css';
import {  useLocation, useNavigate } from 'react-router-dom';
import setPassValidations from '../Validations/setPassValidations';
import {yupResolver} from '@hookform/resolvers/yup'; //npm install @hookform/resolvers
import { useForm } from 'react-hook-form'; //npm i react-hook-form
import {useDispatch ,useSelector} from "react-redux";
import { setNewPass } from '../Faetures/UserSlicer';
import axios from 'axios'
import { FaArrowAltCircleLeft } from "react-icons/fa";



const SetnewPassword = () => {
  let [password, setPassword] = useState("");
  let [passwordConfirmation, setPasswordConfirmation] = useState("");

  const location = useLocation()
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const { user, isSuccess, isError, message } = useSelector(
    (state) => state.usersInfo
  );
  const{
    register,
    handleSubmit:submitForm,
    formState:{errors}
  }=useForm({resolver:yupResolver(setPassValidations)})

  const handleSetnewPassword = async () => {

    if(password !== passwordConfirmation) {
      return
    }

    try {
      const response = await axios.put("http://127.0.0.1:8080/setNewPass", {
          password:password,
          email: location.state.email,
      })
      
      navigate("/login")
  } catch (error) {
      //return rejectWithValue(error.response.data); // Handle error properly
      alert("invalid credential"+ error);
  }



  };
  useEffect(()=>{
    if(!location.state?.email){
      navigate('/login')
    } 
  },[user,navigate])

  const handleBack = () => {
    navigate("/Verify-Code");
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
        <Col md={6} className="left-section d-flex flex-column align-items-center justify-content-center">
          <img src={logo} alt="Logo" className="logo" />
          <h2 className="welcome-title">Set New Password</h2>
          <Form className="form-container">
            <Form.Group controlId="formEmail" className="mb-4">
              <Form.Label className="form-label-left">New Password</Form.Label>
              <div className="input-icon">
                <i className="fas fa-lock"></i>
                <Form.Control type="password" placeholder="Enter your password" className='inputBox'
                {...register('vpassword',{
                            onChange:(e)=>setPassword(e.target.value)
                        })}/>
              <p className="error">{errors.vpassword?.message}</p>
              </div>

            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-4">
              <Form.Label className="form-label-left">Conform New Password</Form.Label>
              <div className="input-icon">
                <i className="fas fa-lock"></i>
                <Form.Control type="password" placeholder="Confirm your password" className='inputBox'
                {...register('vpasswordConfirmation',{
                            onChange:(e)=>setPasswordConfirmation(e.target.value)
                        })}/>
                <p className="error">{errors.vpasswordConfirmation?.message}</p>
              </div>
              <button className="signin-button" onClick={submitForm(handleSetnewPassword)}>Set Password</button>

            </Form.Group>
          </Form>
        </Col>

        {/* Right section - Background Image with Illustration */}
        <Col md={6} className="right-section d-flex align-items-center justify-content-center">
          <img src={rectangleImage} alt="Background Rectangle" className="background-image" />
          <div className="illustration-container">
            <img src={illustration} alt="Illustration" className="illustration" />
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default SetnewPassword;
