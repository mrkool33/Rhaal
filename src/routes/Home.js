import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destiation from "../components/Destiation";
import Footer from "../components/Footer";
import image from "../assets/image38.png";
import StatisticsBanner from "../components/StatisticsBanner";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={image}
        title="Embarking on a new adventure"
        text="Reaching the destination of dreams"
        buttnText="Travel Plan"
        url="/discover"
        btnClass="show"
      />
      <Categories />
      <Destiation />
      <StatisticsBanner />
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
};

export default Home;
