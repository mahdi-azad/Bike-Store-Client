import React, { useState } from "react";

const NavbarMod = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src="/bike-logo.png" alt="Cykla Logo" className="logo-img" />
          <div className="logo-text">Cykla</div>
        </div>

        {/* Links Section */}
        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/products" className="nav-link">
            Products
          </a>
          <a href="/services" className="nav-link">
            Services
          </a>
          <a href="/aboutus" className="nav-link">
            About Us
          </a>
          <a href="/contact" className="nav-link">
            Contact Us
          </a>
          <a href="/signin" className="nav-link login-btn">
            Log In
          </a>
        </div>

        {/* Burger Menu */}
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMod;
