import React from "react";
// import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import QualityBikes from "../components/QualityBikes";
import Features from "../components/Features";
// import Services from "../components/Services";
import ChooseUs from "../components/ChooseUs";
import Contact from "../components/Contact";
// import Footer from "../components/Footer";
import HeroSwiper from "../components/HeroSwiper";

const HomePage = () => {
  return (
    <div>
      <HeroSwiper />
      <ChooseUs />
      <HeroSection />
      <QualityBikes />
      <Features />
    </div>
  );
};

export default HomePage;
