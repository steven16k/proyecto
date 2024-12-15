// Dashboard.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

const Dashboard = () => {
  const [isActivosSelected, setIsActivosSelected] = useState(false);

  // Función que cambia el estado de "Activos" cuando se selecciona
  const handleSelectActivos = (selected) => {
    setIsActivosSelected(selected);
  };

  return (
    <div className="dashboard">
      <Sidebar onSelectActivos={handleSelectActivos} /> {/* Pasa la función */}
      <Content isActivosSelected={isActivosSelected} /> {/* Pasa el estado */}
    </div>
  );
};

export default Dashboard;
