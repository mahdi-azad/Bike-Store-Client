import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplayService = () => {
  const [services, setService] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch products on mount
  useEffect(() => {
    fetchService();
  }, []);

  const fetchService = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/display-service");
      setService(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching services:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/display-service/${id}`);
      fetchService();
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="display-services">
      <h2>Services List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image URL</th>
            <th>Description</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Featured</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service._id}>
              <td>{service.name}</td>
              <td>
                <a
                  href={service.image}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Image
                </a>
              </td>
              <td>{service.description}</td>
              <td>${service.price.toFixed(2)}</td>
              <td>{service.rating.toFixed(1)} / 5</td>
              <td>{service.featured ? "Yes" : "No"}</td>
              <td>
                <button onClick={() => handleDelete(service._id)}>
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

export default DisplayService;
