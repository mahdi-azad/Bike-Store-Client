import React from "react";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const services = [
  {
    id: 1,
    title: "Bike Repairs",
    description: "Expert repairs for all different types of bikes.",
    image: "/bike-repair.jpg",
  },
  {
    id: 2,
    title: "Maintenance",
    description: "We make sure your bike in peak condition.",
    image: "/maintenance.jpg",
  },
  {
    id: 3,
    title: "Customization",
    description: "Customize your bike to fit your style your way",
    image: "/customization.jpg",
  },
  {
    id: 4,
    title: "Diagnostics",
    description: "Comprehensive diagnostics to ensure safety.",
    image: "/diagnostics.jpg",
  },
  {
    id: 5,
    title: "Safety Checks",
    description: "Our experts ensure your bike is safe and secure.",
    image: "/safety-check.jpg",
  },
  {
    id: 6,
    title: "Tire Replacement",
    description: "Quick and easy tire replacement services.",
    image: "/tire-replacement.jpg",
  },
  {
    id: 7,
    title: "Brake Adjustments",
    description: "Precise brake adjustments for safety.",
    image: "/brake-adjustment.jpg",
  },
  {
    id: 8,
    title: "Gear Tuning",
    description: "Fine-tuning for smooth gear changes.",
    image: "/gear-tuning.jpg",
  },
];

const Services = () => {
  return (
    <section className="featured-services">
      <div className="container">
        <h2 className="section-title">
          <MdOutlineMiscellaneousServices />
          &nbsp; Featured Services
        </h2>
        <h3 className="section-subtitle">
          Providing reliable, high-quality services to keep you riding smoothly
          and safely.
        </h3>
        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-3">
              <div className="service-card">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
