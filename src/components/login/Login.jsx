import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithPopup, googleProvider } from "../../firebaseConfig";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
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
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      navigate("/home");
    } catch (error) {
      alert("Login Failed: " + error.message);
    }
  };

  // Handle Forgot Password
  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email first!");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent! Check your email.");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  // Handle Google Sign-In
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

      {/* Right Side - Login Form */}
      <div className="signup-right">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleLogin} className="signup-form">
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit" className="btn">Login</button>
        </form>

        <div className="social-login">
          <button className="google-btn" onClick={handleGoogleSignIn}>
            <i className="fa fa-google"></i> Login with Google
          </button>
          <button className="forgot-password-btn" onClick={handleForgotPassword}>
            Forgot Password?
          </button>
        </div>

        <p>Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
