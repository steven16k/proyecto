// App.js
import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Content from './components/Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
  // Simulación de datos dinámicos obtenidos de una base de datos o API
  const userData = {
    name: 'Francisco Hernandez', // Nombre del usuario
    location: 'UNP, Managua', // Ubicación del usuario
  };

  const [isActivosSelected, setIsActivosSelected] = useState(false);

  const handleSelectActivos = (selected) => {
    setIsActivosSelected(selected);
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="app">
              {/* Barra lateral */}
              <Sidebar onSelectActivos={handleSelectActivos} />
              {/* Sección principal */}
              <div className="main-section">
                {/* Encabezado con datos dinámicos */}
                <Header userName={userData.name} userLocation={userData.location} />
                {/* Contenido principal */}
                <Content isActivosSelected={isActivosSelected} />
              </div>
            </div>
          } 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
