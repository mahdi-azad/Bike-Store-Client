import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Fetch cart items

  const fetchCartItems = async () => {
    try {
      console.log(user);
      console.log("email from frontend", user.email);
      const email = {
        email: user.email,
      };
      console.log(email);
      const response = await axios.get("http://localhost:5000/cart-list", {
        params: email,
      });
      console.log(response);
      if (response.data.status === 200) {
        setCartItems(response.data.data);

        // Calculate total price
        const total = response.data.data.reduce((sum, item) => {
          return sum + item.price;
        }, 0);
        setTotalPrice(total);
      } else {
        toast.error("Failed to fetch cart items.");
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  // Delete item from cart
  const handleDelete = async (orderId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user.email) {
        return toast.error("Please log in to delete items from your cart.");
      }

      const response = await axios.delete(
        `http://localhost:5000/cart-list/${orderId}`
      );

      if (response.status === 200) {
        // Remove the deleted item from the cartItems state
        setCartItems((prevItems) =>
          prevItems.filter((item) => item._id !== orderId)
        );

        // Recalculate total price
        const newTotal = cartItems
          .filter((item) => item._id !== orderId)
          .reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(newTotal);

        toast.success("Item deleted successfully!");
      } else {
        toast.error("Failed to delete the item.");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("Something went wrong. Please try again.");
    }
    // fetchCartItems();
  };

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-items">
          <h2 className="cart-title">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.productId}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                </div>
                <button
                  className="delete-button rounded"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
        <div className="cart-summary">
          <h2 className="summary-title">Order Summary</h2>
          <p className="cart-total">Total Price: ${totalPrice.toFixed(2)}</p>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
