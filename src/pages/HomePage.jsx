import React from "react";
// import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import QualityBikes from "../components/QualityBikes";

// import Services from "../components/Services";
import ChooseUs from "../components/ChooseUs";
// import Footer from "../components/Footer";
import HeroSwiper from "../components/HeroSwiper";
import FeaturedProducts from "../components/FeaturedProducts";
import FeaturedServices from "../components/FeaturedServices";
import Feedback from "../components/Feedback";

// const HomePage = () => {
//   return (
//     <div>
//       <HeroSwiper />
//       <HeroSection />
//       <ChooseUs />
//       <FeaturedProducts />
//       <QualityBikes />
//       <FeaturedServices />
//       <Feedback />
//     </div>
//   );
// };

const HomePage = () => {
  return (
    <div>
      <HeroSwiper />
      <ChooseUs />
      <HeroSection />
      <FeaturedProducts />
      <QualityBikes />
      <FeaturedServices />
      <Feedback />
    </div>
  );
};

export default HomePage;
