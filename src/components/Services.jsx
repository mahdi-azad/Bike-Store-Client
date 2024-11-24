import React, { useEffect, useState } from "react";
import serviceAnimation from "../assets/service-anim.json";
import axios from "axios";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get("http://localhost:5000/display-service");
      setServices(response.data.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };
  return (
    <div className="products-page">
      <div className="container py-4">
        {/* Intro Section */}
        <div className="products-intro d-flex align-items-center flex-wrap">
          <div className="intro-text">
            <h1 className="products-title">Our Expert Bike Services</h1>
            <p className="products-subtitle">
              Keep your bike in peak condition with our professional services.
              From repairs to custom tuning, we’re here to ensure every ride is
              smooth and enjoyable.
            </p>
          </div>
          <div className="intro-animation">
            <Lottie
              animationData={serviceAnimation}
              loop={true}
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* Services display */}
        <div className="bikes-container py-5">
          <div className="container">
            <div className="row gy-4">
              {services.map((service) => (
                <div className="col-12 col-sm-6 col-lg-4" key={service._id}>
                  <Link
                    to={`/display-service/${service._id}`}
                    className="product-card-link"
                  >
                    <div className="product-card shadow">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="product-card-img"
                      />
                      <div className="product-card-body">
                        <h5 className="product-card-title">{service.name}</h5>
                        <p className="product-card-description">
                          {service.description}
                        </p>
                        <div className="product-card-footer">
                          <span className="product-card-price">
                            ${service.price}
                          </span>
                          <span className="product-card-rating">
                            {service.rating}⭐
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
