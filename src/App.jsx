import { Route, Routes } from "react-router-dom";

import "./styles/main.scss";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import ServicesPage from "./pages/ServicesPage";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
