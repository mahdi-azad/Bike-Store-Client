import React from "react";
import services from "../staticData/reviewsData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Feedback = () => {
  return (
    <div className="feedback-section">
      <div className="container">
        <div className="feedback-header">
          <h2 className="feedback-title">Customer Feedback</h2>
          <p className="feedback-description">
            Discover what our happy customers have to say about our products and
            services.
          </p>
        </div>
        <Carousel
          responsive={responsive}
          autoPlaySpeed={1000}
          infinite={true}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          keyBoardControl={true}
          // showDots={true}
        >
          {services.map((review, index) => (
            <div className="feedback-card" key={index}>
              <div className="feedback-image">
                <img src={review.image} alt={review.name} />
              </div>
              <h4 className="feedback-name">{review.name}</h4>
              <p className="feedback-role">{review.role}</p>
              <p className="feedback-text">{review.feedback}</p>
              <div className="feedback-stars">{"⭐".repeat(review.stars)}</div>
            </div>
          ))}
        </Carousel>
        ;
      </div>
    </div>
  );
};

export default Feedback;
