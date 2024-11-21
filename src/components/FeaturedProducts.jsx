import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  // Filter for featured products

  const featuredProducts = products.filter((product) => product.featured);
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

  return (
    <div className="featured-products">
      <div className="container py-5">
        <h2 className="section-title text-center">Featured Products</h2>
        <p className="section-subtitle text-center">
          Check out some of our best products, handpicked for you!
        </p>
        <div className="row gy-4">
          {featuredProducts.map((product) => (
            <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
              <div className="text-center mt-4">
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
                      <p className="product-card-price">${product.price}</p>
                      <p className="product-card-rating">{product.rating}⭐</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
