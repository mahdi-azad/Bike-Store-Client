import React from "react";
import Lottie from "lottie-react";
import bike from "../../public/bike.json";

const slides = [
  {
    image: "/hero1.jpg", // Reference from public directory
    heading: "Welcome to Cykla",
    description:
      "Your ultimate destination for high-quality bikes and services.",
  },
  {
    image: "/hero2.jpg", // Reference from public directory
    heading: "Innovative Technology",
    description:
      "Experience the latest in biking technology and eco-friendly designs.",
  },
  {
    image: "/hero3.jpg", // Reference from public directory
    heading: "Join Our Community",
    description:
      "Ride with us and be a part of a community that values sustainability.",
  },
];
const HeroSection = () => {
  return (
    // <div className="container">
    //   <section className="intro-section">
    //     <div className="intro-text">
    //       <h2>Welcome to Cykla!</h2>
    //       <h5>
    //         Your one-stop destination for <strong>everything</strong> biking!
    //         From <strong>mountain trails</strong> to{" "}
    //         <strong>city streets</strong>, or the latest{" "}
    //         <strong>electric rides</strong>, we’ve got the perfect bike for
    //         every adventure. Discover our top-quality selection of bikes and
    //         accessories, crafted to elevate every ride. Need repairs? Our expert
    //         technicians are here to keep you rolling smoothly. Experience the
    //         freedom of cycling with Cykla – where your next journey begins on
    //         two wheels.
    //       </h5>
    //     </div>
    //     <div className="intro-image">
    //       <img src="hero-bike.png" alt="Person riding a bike" />
    //     </div>
    //   </section>
    // </div>
    <div className="eco-friendly-background">
      <div className="container eco-friendly-section">
        <div className="row align-items-center">
          {/* Text Column */}
          <div className="col-md-6 text-section">
            <h2>Eco-Friendly and Environmentally Conscious</h2>
            <p>
              At Cykla, we are dedicated to promoting a sustainable lifestyle.
              Every bike we offer is designed to minimize environmental impact
              and reduce carbon footprints, helping you make a positive change
              for our planet.
            </p>
          </div>

          {/* Image Column */}
          <div className="col-md-6 image-section">
            {/* <img
              src="hero-bike.png"
              alt="Eco-friendly bike"
              className="img-fluid"
            /> */}
            <Lottie animationData={bike} loop={true} width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
