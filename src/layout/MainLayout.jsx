import React from "react";
import { Outlet } from "react-router-dom";
import NavbarMod from "../components/NavbarMod";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavbarMod />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
