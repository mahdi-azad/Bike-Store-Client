import React from "react";
import { Ri24HoursFill } from "react-icons/ri";
import { MdElectricBike } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

const ChooseUs = () => {
  return (
    <section className="advertise-section">
      <div className="container">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="feature-card">
              <h3 className="feature-title">
                <Ri24HoursFill />
                &nbsp; Real-Time Availability
              </h3>
              <p>
                Check product and service availability in real-time, so you
                always know what's in stock.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature-card">
              <h3 className="feature-title">
                <MdElectricBike />
                &nbsp; Instant Booking
              </h3>
              <p>
                Easily book repairs or service appointments with just a few
                clicks.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature-card">
              <h3 className="feature-title">
                <FaRegCalendarAlt />
                &nbsp; Flexible Scheduling
              </h3>
              <p>Customize scheduling to fit your timeline and convenience.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature-card">
              <h3 className="feature-title">
                <FaRegClock />
                &nbsp; 24/7 Support
              </h3>
              <p>
                Get around-the-clock customer support for any inquiries or
                issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
