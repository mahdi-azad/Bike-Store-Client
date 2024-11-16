import Lottie from "lottie-react";
import React from "react";
// import aboutAnim from "../assets/self-bike.json";

// const defaultOptions = {
//   loop: true,
//   autoplay: true,
//   path: "/aboutus-anim.json", // Direct path to public folder
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice",
//   },
// };

const About = () => {
  return (
    <section className="about-us container">
      <div className="about-row">
        {/* Left Section: Textual Introduction and Banner */}
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to Cykla, where we’re passionate about empowering your
            cycling journey. Our mission is to provide high-quality bikes and
            exceptional service for riders of all levels, from city commuters to
            adventurous mountain bikers. Whether you’re a seasoned cyclist or
            just starting out, we’re here to help you find the perfect bike for
            your needs.
          </p>
          <p className="highlight">
            We value quality, customer support, and sustainability to ensure
            every ride is a journey towards excellence and responsibility.
          </p>
          {/* Responsive Banner Image */}
          <div className="banner">
            <img
              src="/bike-banner.jpg"
              alt="Biking Banner"
              className="banner-image"
            />
          </div>
        </div>
        {/* Right Section: Feature Highlights */}
        <div className="about-features">
          <div className="feature">
            <img
              src="/quality_craftsmanship.jpg"
              alt="Quality Craftsmanship"
              className="feature-icon"
            />
            <div className="feature-content">
              <h3>Quality Craftsmanship</h3>
              <p>
                At Cykla, we’re dedicated to quality. Each bike in our
                collection is meticulously crafted for performance, durability,
                and comfort, ensuring you can ride confidently on any terrain.
              </p>
            </div>
          </div>
          <div className="feature">
            <img
              src="/customer_support.jpg"
              alt="Customer Support"
              className="feature-icon"
            />
            <div className="feature-content">
              <h3>Customer Support</h3>
              <p>
                Our team is here to support you every step of the way, from
                selecting your bike to maintenance tips and after-sales service.
                We believe that customer satisfaction is key to building a
                strong cycling community.
              </p>
            </div>
          </div>
          <div className="feature">
            <img
              src="/innovation_sustainability.jpg"
              alt="Innovation & Sustainability"
              className="feature-icon"
            />
            <div className="feature-content">
              <h3>Innovation & Sustainability</h3>
              <p>
                We continuously strive to bring innovative, eco-friendly options
                to the market. Our commitment to sustainability means offering
                products and services that respect both riders and the planet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
