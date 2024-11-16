import React from "react";

const Feedback = () => {
  const reviews = [
    {
      name: "Ahmed Khan",
      role: "CLIENT",
      feedback:
        "The service and quality are fantastic! Highly recommend this store for all bike enthusiasts.",
      stars: 5,
      image: "/reviewers/ahmed-khan.jpg", // Replace with your MidJourney image
    },
    {
      name: "Sophia Lee",
      role: "CLIENT",
      feedback:
        "The staff was friendly, and the bike quality exceeded my expectations. Will be back for sure!",
      stars: 5,
      image: "/reviewers/sophia-lee.jpg", // Replace with your MidJourney image
    },
    {
      name: "Ethan Wright",
      role: "CLIENT",
      feedback:
        "Affordable, reliable, and stylish bikes. A great place for both beginners and professionals.",
      stars: 5,
      image: "/reviewers/ethan-wright.jpg", // Replace with your MidJourney image
    },
  ];

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
        <div className="feedback-grid">
          {reviews.map((review, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default Feedback;
