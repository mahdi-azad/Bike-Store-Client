import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Lottie from "lottie-react";
import createProductAnimation from "../../assets/create-product.json";
import toast from "react-hot-toast";
import axios from "axios";
const CreateService = () => {
  const initialValues = {
    name: "",
    image:
      "https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "",
    price: "",
    rating: "",
    featured: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Product name is required"),
    image: Yup.string().url("Invalid URL").required("Image URL is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .required("Price is required")
      .min(0.01, "Price must be greater than 0")
      .test("is-decimal", "Price must have up to two decimal places", (value) =>
        /^\d+(\.\d{1,2})?$/.test(value)
      ),
    rating: Yup.number()
      .required("Rating is required")
      .min(1, "Rating must be at least 1")
      .max(5, "Rating cannot exceed 5")
      .test("is-decimal", "Rating must have up to one decimal place", (value) =>
        /^\d+(\.\d{1})?$/.test(value)
      ),

    featured: Yup.boolean().required(
      "Please select if the product is featured"
    ),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Process the form data (e.g., send to API)
    console.log("Service Created:", values);
    axios
      .post("http://localhost:5000/create-service", values)
      .then((response) => {
        console.log("Response:", response.data);
        if (response.data.data.acknowledged) {
          toast.success("Service Created Successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Something Went Wrong");
      });
    // Reset the form
    resetForm();
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
          <h2 className="create-product-title">Create New Service</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
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
                <label htmlFor="imageUrl">Image URL</label>
                <Field type="text" id="image" name="image" />
                <ErrorMessage
                  name="imageUrl"
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
                    <Field type="radio" name="featured" value={true} />
                    Yes
                  </label>
                  <label>
                    <Field type="radio" name="featured" value={false} />
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
                Create Service
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CreateService;
