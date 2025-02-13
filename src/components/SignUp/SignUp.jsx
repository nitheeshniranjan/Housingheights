import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider, signInWithPopup } from "../../firebaseConfig";
import "./SignUp.css";


const SignUp = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.role === "") {
      alert("Please select a role before signing up!");
      return;
    }
    alert(`Registered Successfully as ${formData.role}!`);
    navigate("/home", { state: { user: formData } });
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      alert(`Signed in as ${user.email}`);
      navigate("/home", { state: { user: { email: user.email, displayName: user.displayName, uid: user.uid } } });
    } catch (error) {
      alert(`Google Sign-In Failed: ${error.message}`);
    }
  };

  return (
    <div className="signup-container">
      {/* Left Side - Logo & Benefits */}
      <div className="signup-left">
        <img src={"/images/logoo.png"} alt="Website Logo" className="SignUplogo" onClick={() => navigate("/")} />
        <h3>Why Join Us?</h3>
        <ul className="benefits-list">
          <li>✔️ Access exclusive deals & offers</li>
          <li>✔️ Personalized recommendations</li>
          <li>✔️ Quick & easy sign-in experience</li>
          <li>✔️ Secure & seamless transactions</li>
        </ul>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="signup-right">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <select name="role" onChange={handleChange} required>
            <option value="">Select Role</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="agent">Agent</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="btn">Sign Up</button>
        </form>
        
        <div className="social-login">
          <button className="google-btn" onClick={handleGoogleSignIn}>
            <i className="fa fa-google"></i> Sign Up with Google
          </button>
        </div>

        <p>Already have an account? <Link to="/login" className="signup-link">Login</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
