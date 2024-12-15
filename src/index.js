// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./index.css"; // estilos globales

const Root = () => {
  // Simula el estado de autenticación (puedes reemplazar con lógica real)
  const isAuthenticated = localStorage.getItem("authToken");

  return (
    <Router>
      <Routes>
        {/* Ruta principal redirige según el estado de autenticación */}
        <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        {/* Ruta para manejar páginas no encontradas */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
