import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productAnimation from "../assets/product-anim.json";
import Lottie from "lottie-react";
import axios from "axios";

const ProductsPage = () => {
  const [category, setCategory] = useState("All");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/displayproduct");
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className="products-page">
      <div className="container py-4">
        {/* Intro Section */}
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
            <Lottie
              animationData={productAnimation}
              loop={true}
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Category Buttons */}
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

        {/* Products Grid */}
        <div className="bikes-container py-5">
          <div className="container">
            <div className="row gy-4">
              {filteredProducts.map((product) => (
                <div className="col-12 col-sm-6 col-lg-4" key={product._id}>
                  <Link
                    to={`/displayproduct/${product._id}`}
                    className="product-card-link"
                  >
                    <div className="product-card shadow">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-card-img"
                      />
                      <div className="product-card-body">
                        <h5 className="product-card-title">{product.name}</h5>
                        <p className="product-card-description">
                          {product.description}
                        </p>
                        <div className="product-card-footer">
                          <span className="product-card-price">
                            ${product.price}
                          </span>
                          <span className="product-card-rating">
                            {product.rating}⭐
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
