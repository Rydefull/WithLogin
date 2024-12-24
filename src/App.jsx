import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Parser from './pages/Parser';
import Backend from './pages/Backend';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';

function App() {
  const isAuthenticated = !!localStorage.getItem("user_id");

  return (
    <Router>
      <Routes>
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/parser" element={<Parser />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
