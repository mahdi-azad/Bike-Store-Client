import axios from "axios";
import { ErrorMessage, Field, Formik } from "formik";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import createProductAnimation from "../../assets/create-product.json";
import toast from "react-hot-toast";

const UpdateProduct = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

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
  const { _id, name, category, price, image, description, rating, featured } =
    product;

  const handleSubmit = (values, { resetForm }) => {
    // Process the form data (e.g., send to API)
    console.log("Product Updated:", values);
    axios
      .post(`http://localhost:5000/displayproduct/${_id}`, values)
      .then((response) => {
        console.log("Response:", response.data);
        if (response.data.data.acknowledged) {
          toast.success("Product Updated Successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Something Went Wrong");
      });
    // Reset the form
    resetForm();
  };
  const initialValues = {
    name: "",
    image: "",
    description: "",
    price: "",
    rating: "",
    category: "",
    featured: false,
  };
  //   const initialValues = {
  //     name: "",
  //     image: image,
  //     description: description,
  //     price: price,
  //     rating: rating,
  //     category: category,
  //     featured: featured,
  //   };

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
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
                Update Product
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
