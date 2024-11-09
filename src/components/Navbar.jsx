import React from "react";
import { IoIosLogIn } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar sticky-top navbar-expand-lg bg-light">
        <div class="container-fluid">
          <img
            src="bike-logo.png"
            alt="bike-logo"
            class="img-thumbnail navbar-logo me-4"
          />
          <a class="navbar-brand" href="#">
            Cykla
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div class="navbar-login d-flex">
            <IoIosLogIn size={30} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
