import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboutimg from "../assets/img4.avif"
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

const About = () => {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg={Aboutimg}
    title="About Us"
    btnClass="hide"
    />
    <AboutUs/>
    <Footer/>
    </>
  )
}

export default About