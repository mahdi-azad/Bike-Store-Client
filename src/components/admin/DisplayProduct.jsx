import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/displayproduct");
      setProducts(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/displayproduct/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="display-products">
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image URL</th>
            <th>Description</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Featured</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>
                <a
                  href={product.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Image
                </a>
              </td>
              <td>{product.description}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.rating.toFixed(1)} / 5</td>
              <td>{product.category}</td>
              <td>{product.featured ? "Yes" : "No"}</td>
              <td>
                <Link to={`/dashboard/update-product/${product._id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(product._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayProduct;
