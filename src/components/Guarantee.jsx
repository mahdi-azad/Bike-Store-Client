import React from "react";

const Guarantee = () => {
  return (
    <section className="service-guarantee rounded mt-4">
      <div className="guarantee-container">
        <h2 className="guarantee-title">Why Choose Us?</h2>
        <p className="guarantee-subtitle">
          Your satisfaction is our priority. We stand by the quality of our
          services with a <strong>100% satisfaction guarantee</strong>.
        </p>
        <div className="guarantee-content">
          <div className="guarantee-card">
            <div className="card-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3>Expert Technicians</h3>
            <p>
              Our certified professionals bring years of experience to every
              repair and tune-up.
            </p>
          </div>
          <div className="guarantee-card">
            <div className="card-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Service Guarantee</h3>
            <p>
              We offer a full refund for any unsatisfactory services—no
              questions asked.
            </p>
          </div>
          <div className="guarantee-card">
            <div className="card-icon">
              <i className="fas fa-star"></i>
            </div>
            <h3>Customer-Centric</h3>
            <p>
              Every service is tailored to your specific needs for a seamless
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
