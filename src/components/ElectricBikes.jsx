import React from "react";
import bikeData from "../staticData/bikesData";

const ElectricBikes = () => {
  const electricBikes = bikeData.filter((bike) => bike.category === "Electric");

  return (
    <div className="bikes-container py-5">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Electric Bikes</h2>
          <p className="section-subtitle">
            Discover cutting-edge electric bikes for effortless rides.
          </p>
        </div>
        <div className="row gy-4">
          {electricBikes.map((bike) => (
            <div className="col-12 col-sm-6 col-lg-4" key={bike.id}>
              <div className="product-card shadow">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="product-card-img"
                />
                <div className="product-card-body">
                  <h5 className="product-card-title">{bike.name}</h5>
                  <p className="product-card-description">{bike.description}</p>
                  <div className="product-card-footer">
                    <span className="product-card-price">${bike.price}</span>
                    <span className="product-card-rating">{bike.rating}⭐</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectricBikes;
