import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  auth, 
  googleProvider, 
  signInWithPopup
} from "../../firebaseConfig"; 
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    password: "", 
    role: "" 
  });
  
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Sign-Up with Email
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.role === "") {
      alert("Please select a role before signing up!");
      return;
    }

    console.log("User Registered:", formData);
    alert(`Registration Successful as a ${formData.role}! Check your email for confirmation.`);

    // Redirect to Home Page with Profile after Registration
    navigate("/home", { state: { user: formData } });
  };

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("Google User Info:", user);
      alert(`Signed in as ${user.email}`);

      // Pass only serializable data to navigate
      navigate("/home", { 
        state: { 
          user: {
            email: user.email,
            displayName: user.displayName,
            uid: user.uid, 
          } 
        } 
      });
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert(`Google Sign-In Failed! Error: ${error.message}`);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

          {/* Role Selection */}
          <select name="role" onChange={handleChange} required>
            <option value="">Select Role</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="agent">Agent</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit" className="btn">Sign Up</button>
        </form>

        <br/> or <br/>

        {/* Google Authentication */}
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
