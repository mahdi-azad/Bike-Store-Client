import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Guarantee from "../components/Guarantee";
import toast from "react-hot-toast";

const SingleService = () => {
  const [service, setService] = useState();
  let { id } = useParams();

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/display-service/${id}`
        );
        setService(response.data.data);
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };
    fetchService();
  }, [id]);

  if (!service) {
    return <p>Loading...</p>;
  }

  const { name, image, description, price, rating } = service;

  const handleAddToCart = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user.email) {
        return toast.error("Please log in to add items to your cart.");
      }

      const cartItem = {
        productId: service._id, // Product ID from URL params
        name: service.name,
        image: service.image,
        description: service.description,
        price: service.price,
        rating: service.rating,
        featured: service.featured || false,
        email: user.email, // User email from localStorage
      };

      const response = await axios.post(
        "http://localhost:5000/cart-services",
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
            <p className="product-description">{description}</p>
            <p className="product-price">Price: ${price}</p>
            <p className="product-rating">Rating: {rating}⭐</p>
            <button className="btn add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Services Guarantee */}
      <div className="container">
        <Guarantee />
      </div>
    </div>
  );
};

export default SingleService;
