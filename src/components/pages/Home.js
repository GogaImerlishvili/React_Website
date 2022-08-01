import React from "react";
import "../../index.css";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import Cards from "../Cards";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
