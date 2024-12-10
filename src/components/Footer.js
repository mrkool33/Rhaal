import React from 'react'
import logo from '../assets/logo.png'

import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
            <img src={logo} className="footer-logo" alt="Logo" />  
            </div>
            <div>
            <a href='/'>
                <i className='fa-brands fa-facebook-square'></i>
            </a>
            <a href='/'>
                <i className="fa-brands fa-twitter"></i>
            </a>
            <a href='/'>
                <i className='fa-brands fa-instagram'></i>
            </a>

            </div>
        </div>
       

        <div className='bottom'>
            <div>
                <h4>Projects</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All Versions</a>
            </div>

            <div>
                <h4>Community</h4>
                <a href='/'>GitHub</a>
                <a href='/'>Issues</a>
                <a href='/'>Projects</a>
                <a href='/'>Twitter</a>
            </div>

            <div>
                <h4>Help</h4>
                <a href='/'>Support</a>
                <a href='/'>Troupleshooting</a>
                <a href='/'>Contact Us</a>
                
            </div>

            <div>
                <h4>Others</h4>
                <a href='/'>Terms of Service</a>
                <a href='/'>Privacy Policy</a>
                <a href='/'>License</a>
            </div>
        </div>
    </div>
    
  )
}

export default Footer