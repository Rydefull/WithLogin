import React from "react";
import Login from "../components/Auth/Login";

const LoginPage = () => {
  return (
    <div className="auth-page">
      <h2>Login</h2>
      <Login />
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default LoginPage;
