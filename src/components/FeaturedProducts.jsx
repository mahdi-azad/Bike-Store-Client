import React from "react";
import bikeData from "../staticData/bikesData";

const FeaturedProducts = () => {
  // Filter for featured products
  const featuredProducts = bikeData.filter((bike) => bike.featured);

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
              <a href="/products" className="product-card-link">
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
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="/products" className="explore-btn">
            Explore Our Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
