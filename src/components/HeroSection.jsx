import React from "react";

const HeroSection = () => {
  return (
    <div className="container">
      <section className="intro-section">
        <div className="intro-text">
          <h2>Welcome to Cykla!</h2>
          <h5>
            Your one-stop destination for <strong>everything</strong> biking!
            From <strong>mountain trails</strong> to{" "}
            <strong>city streets</strong>, or the latest{" "}
            <strong>electric rides</strong>, we’ve got the perfect bike for
            every adventure. Discover our top-quality selection of bikes and
            accessories, crafted to elevate every ride. Need repairs? Our expert
            technicians are here to keep you rolling smoothly. Experience the
            freedom of cycling with Cykla – where your next journey begins on
            two wheels.
          </h5>
        </div>
        <div className="intro-image">
          <img src="hero-bike.png" alt="Person riding a bike" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
