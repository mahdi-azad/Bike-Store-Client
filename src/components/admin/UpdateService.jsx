import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import createProductAnimation from "../../assets/create-product.json";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateService = () => {
  const [service, setService] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

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
  const { _id, name, price, image, description, rating, featured } = service;

  //   const handleSubmit = (values, { resetForm }) => {
  //     // Process the form data (e.g., send to API)
  //     console.log("Service Updated:", values);
  //     axios
  //       .put(`http://localhost:5000/display-service/${_id}`, values)
  //       .then((response) => {
  //         console.log("Response:", response.data);
  //         if (response.data.data.modifiedCount === 1) {
  //           toast.success("Service Updated Successfully");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //         toast.error("Something Went Wrong");
  //       });
  //     // Reset the form
  //     resetForm();
  //     navigate("/dashboard");
  //   };

  //   const initialValues = {
  //     name: name,
  //     image: image,
  //     description: description,
  //     price: price,
  //     rating: rating,
  //     featured: featured,
  //   };

  const handleSubmit = (values, { resetForm }) => {
    // Convert "true"/"false" string values to boolean
    const formattedValues = {
      ...values,
      featured: values.featured === "true", // Convert string to boolean
    };

    // console.log("Service Updated:", formattedValues);

    axios
      .put(`http://localhost:5000/display-service/${_id}`, formattedValues)
      .then((response) => {
        console.log("Response:", response.data);
        if (response.data.data.modifiedCount === 1) {
          toast.success("Service Updated Successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Something Went Wrong");
      });
    resetForm();
    navigate("/dashboard");
  };

  const initialValues = {
    name: name,
    image: image,
    description: description,
    price: price,
    rating: rating,
    featured: featured ? "true" : "false", // Convert boolean to string for the form
  };

  return (
    <div className="create-product-page">
      <div className="create-product-container">
        {/* Left Section with Lottie Animation */}
        <div className="create-product-left">
          <Lottie
            animationData={createProductAnimation}
            loop
            className="create-product-animation"
          />
        </div>

        {/* Right Section with Form */}
        <div className="create-product-right">
          <h2 className="create-product-title">Edit Service</h2>
          <Formik
            initialValues={initialValues}
            enableReinitialize
            onSubmit={handleSubmit}
          >
            <Form className="create-product-form">
              {/* Name */}
              <div className="form-group">
                <label htmlFor="name">Service Name</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-text"
                />
              </div>

              {/* Image URL */}
              <div className="form-group">
                <label htmlFor="image">Image</label>
                <Field type="text" id="image" name="image" />
                <ErrorMessage
                  name="image"
                  component="div"
                  className="error-text"
                />
              </div>

              {/* Description */}
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  rows="3"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="error-text"
                />
              </div>

              {/* Price */}
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <Field type="number" id="price" name="price" />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="error-text"
                />
              </div>

              {/* Rating */}
              <div className="form-group">
                <label htmlFor="rating">Rating (out of 5)</label>
                <Field type="number" id="rating" name="rating" />
                <ErrorMessage
                  name="rating"
                  component="div"
                  className="error-text"
                />
              </div>

              {/* Featured */}
              <div className="form-group">
                <label>Featured</label>
                <div className="radio-group">
                  <label>
                    <Field type="radio" name="featured" value="true" />
                    Yes
                  </label>
                  <label>
                    <Field type="radio" name="featured" value="false" />
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="featured"
                  component="div"
                  className="error-text"
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-btn">
                Update Service
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
