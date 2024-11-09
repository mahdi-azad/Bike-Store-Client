import React from "react";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container d-flex justify-content-center align-items-start">
        <div className="row contact-content shadow-lg p-3 mb-5 bg-white rounded">
          {/* Contact Form */}
          <div className="col-md-6 form-section">
            <h3 className="subtitle">Get in touch</h3>
            <h2 className="title">
              We're here to help with your biking needs!
            </h2>

            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email@website.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="555-555-5555"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Your message"
                ></textarea>
              </div>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="consent"
                  required
                />
                <label className="form-check-label" htmlFor="consent">
                  I allow this website to store my submission so they can
                  respond to my inquiry. <span className="required">*</span>
                </label>
              </div>

              <button type="submit" className="btn btn-submit">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-5 offset-md-1 contact-info">
            <h4>Get in touch</h4>
            <p>
              <MdOutlineAttachEmail /> &nbsp;
              <a href="mailto:mahdiazad1998@gmail.com">
                mahdiazad1998@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p>
              <IoLocationOutline />
              &nbsp;
              <a
                href="https://www.google.com/maps/place/Floral+Park,+NY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Floral Park, NY US
              </a>
            </p>
            <h4>Hours</h4>
            <ul className="hours-list">
              <li>Monday: 9:00am – 10:00pm</li>
              <li>Tuesday: 9:00am – 10:00pm</li>
              <li>Wednesday: 9:00am – 10:00pm</li>
              <li>Thursday: 9:00am – 10:00pm</li>
              <li>Friday: 9:00am – 10:00pm</li>
              <li>Saturday: 9:00am – 6:00pm</li>
              <li>Sunday: 9:00am – 12:00pm</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
