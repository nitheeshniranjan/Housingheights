import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams(); // Get token from URL
  const navigate = useNavigate();
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await axios.post("http://localhost:8080/auth/reset-password", { token, password });
      setMessage("Password reset successful! Redirecting to login...");
      setError("");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setError("Error: " + error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-100 p-4" style={{ maxWidth: "400px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
        <h3 className="text-center mb-3">Reset Password</h3>
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNewPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formConfirmPassword" className="mt-2">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mt-3">
            Update Password
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default ResetPassword;

