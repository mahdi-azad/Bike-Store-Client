import React from "react";
import servicesData from "../staticData/servicesData";
import { Link } from "react-router-dom";

const FeaturedServices = () => {
  // Filter for featured services
  const featuredServices = servicesData.filter((service) => service.featured);

  return (
    <div className="featured-services" style={{ backgroundColor: "#C9D2C5" }}>
      <div className="container py-5">
        {/* Intro Section */}
        <div className="services-intro text-center mb-5">
          <h1 className="services-title">Featured Services</h1>
          <h4 className="services-subtitle">
            Check out our most popular services, handpicked just for you.
          </h4>
        </div>

        {/* Featured Services Cards */}
        <div className="row gy-4">
          {featuredServices.map((service) => (
            <div className="col-12 col-sm-6 col-lg-4" key={service.id}>
              <div className="service-card shadow">
                <img
                  src={service.image}
                  alt={service.name}
                  className="service-card-img"
                />
                <div className="service-card-body">
                  <h4 className="service-card-title">{service.name}</h4>
                  <h5 className="service-card-description">
                    {service.description}
                  </h5>
                  <h5 className="service-card-price">{service.priceRange}</h5>
                  <Link to="/services">
                    <button className="book-now-btn">Book Now!</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
