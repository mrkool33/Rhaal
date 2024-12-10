import React from 'react'

import Aboutimg from "../assets/Salalah1.jpg"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Trip from '../components/Trip'

const Service = () => {
  return (
    <>
   <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg={Aboutimg}
    title="Discover"
    btnClass="hide"
    
    />
    <Trip/>
    <Footer/>
   </>
  )
}

export default Service