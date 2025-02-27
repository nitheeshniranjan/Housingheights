import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./verifyOtp.css";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const email = localStorage.getItem("email"); // Get email stored during login

    try {
      const response = await axios.post("http://localhost:8080/api/v1/user/verify-otp", { email, otp });

      if (response.data) {
        localStorage.setItem("token", response.data.token); // Save JWT token
        alert("OTP Verified! Login Successful.");
        navigate("/home"); // Redirect to home page
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Invalid OTP!");
    }
  };

  return (
    <div className="otp-container">
      <h2>Verify Your OTP</h2>
      <form onSubmit={handleVerifyOtp} className="otp-form">
        <input type="text" name="otp" placeholder="Enter OTP" onChange={handleChange} required />
        <button type="submit" className="btn">Verify OTP</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default VerifyOtp;
