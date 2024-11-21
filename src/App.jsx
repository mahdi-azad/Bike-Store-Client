import { Route, Routes } from "react-router-dom";

import "./styles/main.scss";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import ServicesPage from "./pages/ServicesPage";
import AboutUs from "./pages/AboutUs";
import ProductsPage from "./pages/ProductsPage";
import NavbarMod from "./components/NavbarMod";
import LogIn from "./pages/LogIn";
import Register from "./components/auth/Register";

function App() {
  return (
    <>
      <NavbarMod />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/signin" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
