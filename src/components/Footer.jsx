import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Social Media Section */}
        <div className="row social-media">
          <div className="col-md-6">
            <p>Get connected with Cykla on social networks:</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <hr />

        {/* Footer Content */}
        <div className="row footer-content">
          <div className="footer-section">
            <h5>CYKLA</h5>
            <p>
              Explore our premium bikes, cycling gear, and more. Discover your
              adventure with Cykla – built for every ride.
            </p>
          </div>

          <div className="footer-section">
            <h5>PRODUCTS</h5>
            <ul>
              <li>
                <a href="#">Mountain Bikes</a>
              </li>
              <li>
                <a href="#">Road Bikes</a>
              </li>
              <li>
                <a href="#">Electric Bikes</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h5>USEFUL LINKS</h5>
            <ul>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Store Locations</a>
              </li>
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h5>CONTACT</h5>
            <ul>
              <li>
                <i className="fas fa-home me-2"></i>New Hyde Park, NY 11040, US
              </li>
              <li>
                <i className="fas fa-envelope me-2"></i>support@cykla.com
              </li>
              <li>
                <i className="fas fa-phone me-2"></i>+1 123 456 7890
              </li>
              <li>
                <i className="fas fa-print me-2"></i>+1 123 456 7891
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="mb-0">© 2024 Copyright: Cykla</p>
      </div>
    </footer>
  );
};

export default Footer;
