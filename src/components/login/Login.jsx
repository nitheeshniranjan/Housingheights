import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      alert("Login Successful!");
      navigate("/home");
    } catch (error) {
      alert("Login Failed: " + error.response.data.message);
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
        <form onSubmit={handleLogin} className="signup-form">
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit" className="btn">Login</button>
        </form>

        <div className="social-login">
          <Link to="/forgot-password" className="forgot-password-btn">
            Forgot Password?
          </Link>
        </div>

        <p>Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
