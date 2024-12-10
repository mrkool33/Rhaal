import React from 'react'
import Aboutimg from "../assets/img1.webp"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { ContactF } from '../components/ContactF'

const Contact = () => {
  return (
   <>
   <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg={Aboutimg}
    title="Contact"
    btnClass="hide"
    />
    <ContactF/>
    <Footer/>
   </>
  )
}

export default Contact