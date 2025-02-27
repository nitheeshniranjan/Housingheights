import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before login

    try {
      console.log("🔄 Attempting to log in with:", { email, password });

      const response = await axios.post("http://localhost:8080/api/v1/auth/login", { email, password });

      console.log("✅ Response received:", response.data); // Debugging Log

      // Extract token & role correctly
      const token = response.data?.token;
      const role = response.data?.role;  // No 'user' object, so get 'role' directly
      const name = response.data?.name || "User"; // If backend provides name, use it

      if (!token || !role) {
        throw new Error("❌ Token or role data missing from backend response");
      }

      // Store token & role in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("name", name);

      // ✅ Print token & role in console
      console.log("🎉 Login Successful!");
      console.log("🔑 JWT Token:", token);
      console.log(`👤 ${name} logged in as ${role}`);

      // Set success message
      setSuccessMessage(`${name} logged in as ${role}`);

      // Navigate to home page after a delay
      setTimeout(() => navigate("/home"), 3000);

    } catch (error) {
      console.error("❌ Login Error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={"/images/logo.png"} alt="Website Logo" className="SignUplogo" onClick={() => navigate("/")} />
        <h3>Why Join Us?</h3>
        <ul className="benefits-list">
          <li>✔️ Access exclusive deals & offers</li>
          <li>✔️ Personalized recommendations</li>
          <li>✔️ Quick & easy sign-in experience</li>
          <li>✔️ Secure & seamless transactions</li>
        </ul>
      </div>

      <div className="signup-right">
        <h2>Login to Your Account</h2>

        {/* Display success message */}
        {successMessage && <p className="success-message">{successMessage}</p>}

        {/* Display error message */}
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleLogin} className="signup-form">
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit" className="btn">Login</button>
        </form>

        <div className="social-login">
          <Link to="/forgot-password" className="forgot-password-btn">Forgot Password?</Link>
        </div>

        <p>Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
