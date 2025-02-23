import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    try {
      await axios.post("http://localhost:8080/auth/forgot-password", { email });
      setMessage("A reset link has been sent to your email.");
      setError("");
    } catch (error) {
      setError("Error: " + error.response.data.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-100 p-4" style={{ maxWidth: "400px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
        <h3 className="text-center mb-3">Forgot Password</h3>
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mt-3">
            Send Reset Link
          </Button>
        </Form>
        <div className="text-center mt-3">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </Container>
  );
};

export default ForgotPassword;
