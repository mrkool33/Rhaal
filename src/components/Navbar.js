import React, { useState } from 'react';
import './Navbar.css';
import { MenuItems } from './MenuItems';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import {  useDispatch, useSelector } from "react-redux";
import { logout } from '../Faetures/UserSlicer';


const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.usersInfo)
  console.log(user);
  
  const handleSignUp = () => {
    
    if (user.ufname) {

      dispatch(logout(user.ufname));
      return
    }

    navigate('/login');
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  

  return (
    <nav className="NavbarItems">
      <img src={logo} className="navbar-logo" alt="Logo" />

      <div className="menu-icons" onClick={handleClick} aria-label="Toggle navigation menu">
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
<ul>
      <div className="signup-container">
        <button className="signup-button" onClick={handleSignUp}>{ user.ufname? "Sign out" : "Sign in"}</button>
      </div>
  </ul>
    </nav>
  );
};

export default Navbar;

