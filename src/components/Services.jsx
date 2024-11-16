import React from "react";
import servicesData from "../staticData/servicesData";

const Services = () => {
  return (
    <div className="services-page">
      <div className="container py-5">
        {/* Intro Section */}
        <div className="services-intro text-center mb-5">
          <h1 className="services-title">Our Services</h1>
          <h4 className="services-subtitle">
            Discover a wide range of services tailored to keep your bike in top
            condition.
          </h4>
        </div>

        {/* Services Cards */}
        <div className="row gy-4">
          {servicesData.map((service) => (
            <div className="col-12 col-sm-6 col-lg-4" key={service.id}>
              <div className="service-card shadow">
                <img
                  src={service.image}
                  alt={service.name}
                  className="service-card-img"
                />
                <div className="service-card-body">
                  <h3 className="service-card-title">{service.name}</h3>
                  <h5 className="service-card-description">
                    {service.description}
                  </h5>
                  <h5 className="service-card-price">{service.priceRange}</h5>
                  <button className="book-now-btn">Book Now!</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
