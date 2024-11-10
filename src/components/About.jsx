import React from "react";

const About = () => {
  return (
    <section className="about-us">
      <div className="hero-section">
        <div className="hero-content">
          <h1>About Cykla</h1>
          <p className="hero-description">
            Where biking meets innovation and responsibility. At Cykla, we are
            committed to providing the highest-quality biking experience while
            caring for our planet.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to inspire and empower people through cycling. We are
            dedicated to offering top-tier bikes, professional services, and a
            community that promotes sustainable, thrilling, and safe journeys
            for everyone.
          </p>
        </div>

        <div className="eco-section">
          <h2>Our Eco-Friendly Commitment</h2>
          <p>
            At Cykla, we believe that biking is not just a sport or mode of
            transport, but a way to reduce environmental impact. Our bikes are
            built with eco-friendly materials, and we prioritize sustainable
            manufacturing practices. We also partner with organizations focused
            on conservation and green initiatives to further our goal of
            creating a cleaner, greener planet.
          </p>
          <ul>
            <li>Use of recycled materials in our products and packaging.</li>
            <li>Energy-efficient operations in our facilities.</li>
            <li>Recycling and upcycling programs for old bike parts.</li>
            <li>Supporting green charities and eco-friendly initiatives.</li>
          </ul>
        </div>

        <div className="row feature-section">
          <div className="col-md-4">
            <div className="feature-card">
              <img
                src="/images/high-quality-bikes.jpg"
                alt="High-quality bikes"
                className="feature-image"
              />
              <h3>High-Quality Bikes</h3>
              <p>
                We design and source only the finest bikes to match every ride
                and every rider’s need.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card">
              <img
                src="/images/expert-services.jpg"
                alt="Expert Services"
                className="feature-image"
              />
              <h3>Expert Services</h3>
              <p>
                Our team provides expert repairs, customizations, and
                maintenance to keep your ride in perfect condition.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card">
              <img
                src="/images/innovative-technology.jpg"
                alt="Innovative Technology"
                className="feature-image"
              />
              <h3>Innovative Technology</h3>
              <p>
                We embrace the latest technology to deliver an advanced,
                eco-conscious biking experience.
              </p>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h2>Our Core Values</h2>
          <ul>
            <li>Integrity and transparency in all that we do.</li>
            <li>Commitment to environmental sustainability.</li>
            <li>Excellence in customer service and satisfaction.</li>
            <li>Passion for innovation and adventure.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
