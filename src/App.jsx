import ChooseUs from "./components/ChooseUs";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import QualityBikes from "./components/QualityBikes";
import Services from "./components/Services";
import "./styles/main.scss";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <QualityBikes />
      <Features />
      <Services />
      <ChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
