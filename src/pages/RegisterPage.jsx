import React from "react";
import Register from "../components/Auth/Register";

const RegisterPage = () => {
  return (
    <div className="auth-page">
      <h2>Register</h2>
      <Register />
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default RegisterPage;
