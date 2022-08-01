import React from "react";
import "../../index.css";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import Cards from "../Cards";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
    </>
  );
};

export default Home;
