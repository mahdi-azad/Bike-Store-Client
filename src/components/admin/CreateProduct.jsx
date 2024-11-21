import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Lottie from "lottie-react";
import createProductAnimation from "../../assets/create-product.json";
import toast from "react-hot-toast";
import axios from "axios";
const CreateProduct = () => {
  const initialValues = {
    name: "",
    imageUrl: "",
    description: "",
    price: "",
    rating: "",
    category: "",
    featured: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Product name is required"),
    imageUrl: Yup.string().url("Invalid URL").required("Image URL is required"),
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
    category: Yup.string()
      .oneOf(
        ["Mountain", "Electric", "City", "Accessories"],
        "Invalid category"
      )
      .required("Category is required"),
    featured: Yup.boolean().required(
      "Please select if the product is featured"
    ),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Process the form data (e.g., send to API)
    console.log("Product Created:", values);
    axios
      .post("http://localhost:5000/createproduct", values)
      .then((response) => {
        console.log("Response:", response.data);
        if (response.data.data.acknowledged) {
          toast.success("Product Created Successfully");
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
          <h2 className="create-product-title">Create New Product</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="create-product-form">
              {/* Name */}
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
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
                <Field type="text" id="imageUrl" name="imageUrl" />
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

              {/* Category */}
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <Field as="select" id="category" name="category">
                  <option value="" label="Select a category" />
                  <option value="Mountain" label="Mountain" />
                  <option value="Electric" label="Electric" />
                  <option value="City" label="City" />
                  <option value="Accessories" label="Accessories" />
                </Field>
                <ErrorMessage
                  name="category"
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
                Create Product
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
