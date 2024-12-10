import { React, useState } from 'react';
import { Container, Row, Col, Form, Button, FormGroup } from 'react-bootstrap';
import illustration from '../assets/illustration.png'; // Replace with your illustration path
import rectangleImage from '../assets/Rectangle.png'; // Replace with your rectangle image path
import logo from '../assets/logo.png'; // Replace with your logo path
import './SignUp.css';
import { Label } from 'reactstrap';//npm i reactstrap 
import { useForm } from 'react-hook-form'; //npm i react-hook-form
import { yupResolver } from '@hookform/resolvers/yup'; //npm install @hookform/resolvers
import { useDispatch, useSelector } from "react-redux";
import RegisterValidations from '../Validations/RegistraterValidations';
import { addUser } from '../Faetures/UserSlicer';
import { Link, useNavigate } from "react-router-dom";



function SignUp() {
  //declearting values
  let [ufname, setUFname] = useState("");
  let [ulname, setULname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordConfirmtion, setPasswordConfirmation] = useState("");
  let [phone, setphone] = useState("");

  //declearing 
  const dispatch = useDispatch()
  //it well take the message from thunk
  const msg = useSelector((state) => state.usersInfo.message)


  const navigate = useNavigate();


  //validations
  const {
    register,
    handleSubmit: submitForm,
    formState: { errors }
  } = useForm({ resolver: yupResolver(RegisterValidations) })
  //handle the submit values
  const handleSubmit = () => {
    const user = { email: email, ufname: ufname, ulname: ulname, password: password, phone: phone };
    dispatch(addUser(user))
      .unwrap()
      .then(() => {
        if (msg == "User Added..") {
          //login navigate
          navigate("/login")
        }
      }
    );
  };





  return (
    <>
    
    <Container fluid className="signup-page">
      <Row className="h-100">
        {/* Left section - Background Image with Illustration */}
        <Col md={6} className="right-section d-flex align-items-center justify-content-center">
          <img src={rectangleImage} alt="Background Rectangle" className="background-image" />
          <div className="illustration-container">
            <img src={illustration} alt="Illustration" className="illustration" />
          </div>
        </Col>

        {/* Right section -  Form */}
        <Col md={6} className="left-section d-flex flex-column align-items-center justify--center">
          <img src={logo} alt="Logo" className="logo" />
          <h2 className="welcome-title">Create Account</h2>
          <Form className="form-container">
            <Form.Group controlId="formFirstName" className="mb-4">
              <Form.Label className="form-label-left" >First Name</Form.Label>
              <div className="input-icon">
                <i className="fas fa-user"></i>
                <Form.Control type="text" placeholder="Enter first name" className='inputBox'
                  {...register('vfname', {
                    onChange: (e) => setUFname(e.target.value)
                  })} />{/**passing of user input value */}
                <p className="error">{errors.vfname?.message}</p>
              </div>
            </Form.Group>
            <Form.Group controlId="formFirstName" className="mb-4">
              <Form.Label className="form-label-left">Last Name</Form.Label>
              <div className="input-icon">
                <i className="fas fa-user"></i>
                <Form.Control type="text" placeholder="Enter Last name" className='inputBox'
                  {...register('vlname', {
                    onChange: (e) => setULname(e.target.value)
                  })} />{/**passing of user input value */}
                <p className="error">{errors.vlname?.message}</p>
              </div>
            </Form.Group>
            <Form.Group controlId="formFirstName" className="mb-4">
              <Form.Label className="form-label-left">Phone Number</Form.Label>
              <div className="input-icon">
                <i className="fas fa-phone"></i>
                <Form.Control type="text" placeholder="Enter Phone Number" className='inputBox'
                  {...register('vphone', {
                    onChange: (e) => setphone(e.target.value)
                  })} />{/**passing of user input value */}
                <p className="error">{errors.vphone?.message}</p>
              </div>
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-4">
              <Form.Label className="form-label-left">Email</Form.Label>
              <div className="input-icon">
                <i className="fas fa-envelope"></i>
                <Form.Control type="email" placeholder="email@gmail.com" className='inputBox'
                  {...register('vemail', {
                    onChange: (e) => setEmail(e.target.value)
                  })} />{/**passing of user input value */}
                <p className="error">{errors.vemail?.message}</p>
              </div>
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-4">
              <Form.Label className="form-label-left">Password</Form.Label>
              <div className="input-icon">
                <i className="fas fa-lock"></i>
                <Form.Control type="password" placeholder="Enter your password" className='inputBox'
                  {...register('vpassword', {
                    onChange: (e) => setPassword(e.target.value)
                  })} />{/**passing of user input value */}
                <p className="error">{errors.vpassword?.message}</p>
              </div>
            </Form.Group>
            <Form.Group controlId="formConfirmPassword" className="mb-4">
              <Form.Label className="form-label-left">Confirm Password</Form.Label>
              <div className="input-icon">
                <i className="fas fa-lock"></i>
                <Form.Control type="password" placeholder="Confirm your password" className='inputBox'
                  {...register('vpasswordConfirmation', {
                    onChange: (e) => setPasswordConfirmation(e.target.value)
                  })} />{/**passing of user input value */}
                <p className="error">{errors.vpasswordConfirmation?.message}</p>
              </div>
            </Form.Group>
            <button className="signup-button" onClick={submitForm(handleSubmit)}>Sign Up</button>
            <p className='error'>{msg}</p>
            <FormGroup className="signup-checkbox-group">
              <Label check className="signup-checkbox-label">
                <span className="signup-text"> <Link to="/login" className="signup-link">Already have an account?</Link></span>
              </Label>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default SignUp;
