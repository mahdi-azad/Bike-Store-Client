import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Form, useParams } from "react-router-dom";

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

  const handleAddToCart = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user.email) {
        return alert("Please log in to add items to your cart.");
      }

      const cartItem = {
        productId: product._id, // Product ID from URL params
        name: product.name,
        image: product.image,
        description: product.description,
        price: product.price,
        rating: product.rating,
        category: product.category,
        featured: product.featured || false,
        email: user.email, // User email from localStorage
      };

      const response = await axios.post(
        "http://localhost:5000/cart-products",
        cartItem
      );

      if (response.data.status === 200) {
        toast.success("Item added to cart successfully!");
      } else {
        toast.error("Failed to add item to cart.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

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
            <button className="btn add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
