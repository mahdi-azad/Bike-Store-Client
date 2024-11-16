import React, { useState } from "react";
import MountainBikes from "../components/MountainBikes";
import CityBikes from "../components/CityBikes";
import ElectricBikes from "../components/ElectricBikes";
import BikeAccessories from "../components/BikeAccessories";
import productAnimation from "../assets/product-anim.json";
import Lottie from "lottie-react";
import FeaturedProducts from "../components/FeaturedProducts";

const ProductsPage = () => {
  const [category, setCategory] = useState("All");

  // Map categories to their components
  const components = {
    Mountain: <MountainBikes />,
    City: <CityBikes />,
    Electric: <ElectricBikes />,
    Accessories: <BikeAccessories />,
    All: (
      <>
        <MountainBikes />
        <CityBikes />
        <ElectricBikes />
        <BikeAccessories />
      </>
    ),
  };

  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: productAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="products-page">
      <div className="container py-4">
        {/* Intro Section with Lottie Animation */}
        <div className="products-intro d-flex align-items-center flex-wrap">
          <div className="intro-text">
            <h1 className="products-title">Explore Our Bikes & Accessories</h1>
            <p className="products-subtitle">
              Discover the perfect bike for every adventure, commute, or
              leisurely ride. Find quality, performance, and style in every
              product.
            </p>
          </div>
          <div className="intro-animation">
            {/* <Lottie options={defaultOptions} height={300} width={300} /> */}
            <Lottie
              animationData={productAnimation}
              loop={true}
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Buttons for selecting categories */}
        <div className="button-group mb-4 text-center">
          <button
            className="btn btn-success me-2"
            onClick={() => setCategory("All")}
          >
            All
          </button>
          <button
            className="btn btn-success me-2"
            onClick={() => setCategory("Mountain")}
          >
            Mountain Bikes
          </button>
          <button
            className="btn btn-success me-2"
            onClick={() => setCategory("City")}
          >
            City Bikes
          </button>
          <button
            className="btn btn-success me-2"
            onClick={() => setCategory("Electric")}
          >
            Electric Bikes
          </button>
          <button
            className="btn btn-success"
            onClick={() => setCategory("Accessories")}
          >
            Accessories
          </button>
        </div>

        {/* Render the selected category */}
        <div>{components[category]}</div>
      </div>
    </div>
  );
};

export default ProductsPage;
