import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState();
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/displayproduct/${id}`
        );
        setProduct(response.data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const { name, category, price, image, description, rating } = product;

  return (
    <div className="single-product-page">
      <div className="container">
        <div className="product-content">
          <div className="product-image">
            <img src={image} alt={name} />
          </div>
          <div className="product-details">
            <h1 className="product-title">{name}</h1>
            <p className="product-category">Category: {category}</p>
            <p className="product-description">{description}</p>
            <p className="product-price">Price: ${price}</p>
            <p className="product-rating">Rating: {rating}⭐</p>
            <button className="btn add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
