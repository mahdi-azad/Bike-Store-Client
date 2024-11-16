import React, { useState } from "react";
import Lottie from "lottie-react";
import signinAnimation from "../../assets/signin.json";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [generalError, setGeneralError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset errors when input changes
    setErrors({ ...errors, [name]: "" });
    setGeneralError("");
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const isValidUser =
        formData.email === "user@example.com" &&
        formData.password === "Password123";

      if (!isValidUser) {
        setGeneralError("Invalid login credentials");
      } else {
        alert("Sign-in successful!");
      }
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        {/* Left Side Animation */}
        <div className="signin-left">
          <Lottie
            animationData={signinAnimation}
            loop={true}
            className="signin-animation"
          />
        </div>

        {/* Right Side Form */}
        <div className="signin-right">
          <form className="signin-form" onSubmit={handleSubmit}>
            <h2 className="signin-title">Sign In</h2>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? "input-error" : ""}
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={errors.password ? "input-error" : ""}
                placeholder="Enter your password"
              />
              {errors.password && (
                <span className="error-text">{errors.password}</span>
              )}
            </div>

            {/* General Error */}
            {generalError && (
              <div className="general-error">{generalError}</div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="submit-btn"
              disabled={!formData.email || !formData.password}
            >
              Sign In
            </button>

            {/* Register Link */}
            <p className="register-text">
              Don't have an account? <a href="/register">Register here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
