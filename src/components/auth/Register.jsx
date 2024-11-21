import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Lottie from "lottie-react";
import signupAnimation from "../../assets/signin.json"; // Using the same animation
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    fullName: "",
    imageUrl: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("Full name is required.")
      .min(3, "Full name must be at least 3 characters."),
    imageUrl: Yup.string().url("Invalid URL format.").nullable(),
    email: Yup.string()
      .email("Invalid email format.")
      .required("Email is required."),
    password: Yup.string()
      .required("Password is required.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/,
        "Password must be at least 8 characters long, with one uppercase letter, one lowercase letter, one number, and one special character."
      ),
  });
  //Mahdi123!
  //mahdi@email.com
  //John123!

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
    axios
      .post("http://localhost:5000/signup", values)
      .then((response) => {
        console.log("Response:", response.data);
        if (response.data.data.acknowledged) {
          toast.success("User Created Successfully");
          navigate("/signin");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Something Went Wrong");
      });
  };

  return (
    <>
      <div className="register-page">
        <div className="register-container">
          {/* Left Side Animation */}
          <div className="register-left">
            <Lottie
              animationData={signupAnimation}
              loop={true}
              className="register-animation"
            />
          </div>

          {/* Right Side Form */}
          <div className="register-right">
            <h2 className="register-title">Create an Account</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isValid, dirty }) => (
                <Form className="register-form">
                  {/* Full Name Field */}
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <Field
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="error-text"
                    />
                  </div>

                  {/* Image URL Field */}
                  <div className="form-group">
                    <label htmlFor="imageUrl">Image URL (Optional)</label>
                    <Field
                      type="url"
                      id="imageUrl"
                      name="imageUrl"
                      placeholder="Enter profile picture URL"
                    />
                    <ErrorMessage
                      name="imageUrl"
                      component="div"
                      className="error-text"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-text"
                    />
                  </div>

                  {/* Password Field */}
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="password-wrapper">
                      <Field
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Create a password"
                      />
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        className="toggle-password-icon"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error-text"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={!(isValid && dirty)} // Button disabled until form is valid
                  >
                    Sign Up
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
