import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavbarMod = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //sarah@email.com
  //SarahKhan123!
  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser("");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src="/bike-logo.png" alt="Cykla Logo" className="logo-img" />
          <div className="logo-text">Cykla</div>
        </div>

        {/* Navbar Links */}
        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Products
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Contact Us
          </NavLink>
          {user && user.imageUrl ? (
            <div className="user-profile">
              <img
                src={user.imageUrl}
                alt="User Avatar"
                className="user-avatar"
              />
              <span className="user-name">{user.fullName}</span>
              {user && user.role === "admin" ? (
                <NavLink to="dashboard">
                  <button className="btn logout-btn">Admin Dashboard</button>
                </NavLink>
              ) : (
                <div></div>
              )}
              <button className="btn logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? "nav-link login-btn active" : "nav-link login-btn"
              }
              onClick={closeMenu}
            >
              Log In
            </NavLink>
          )}
        </div>

        {/* Burger Menu */}
        <div
          className={`burger-menu ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMod;
