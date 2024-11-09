import React from "react";

const QualityBikes = () => {
  return (
    <section className="quality-bikes">
      <div className="container">
        <div className="image">
          <img src="QualityBikes.png" alt="Bicycles in a row" />
        </div>
        <div className="content">
          <h3 className="subtitle">Ride with Confidence</h3>
          <h2 className="title">Your destination for quality bikes</h2>
          <p className="text">
            <strong>Cykla</strong> thrives in <strong>Floral Park, US</strong>,
            as your go-to destination for top-notch mountain bikes, electric
            bikes, and road bikes. We offer an extensive selection of biking
            accessories to enhance your ride. Our expert team is dedicated to
            providing exceptional repair services to keep your bike in perfect
            condition. Trust Cykla for all your cycling needs and experience the
            joy of riding with confidence!
          </p>
          <a href="/contact" className="link">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default QualityBikes;
