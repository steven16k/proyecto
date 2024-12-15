import React from 'react';
import './Content.css';
import logo from '../assets/Logo UNP.png'; // Ruta de la imagen del logo
import OpcionesActivos from './OpcionesActivos'; // Importar el componente OpcionesActivos

const Content = ({ isActivosSelected }) => {
  return (
    <div className="content">
      {isActivosSelected ? (
        <OpcionesActivos /> // Mostrar las opciones de activos cuando se selecciona "Activos"
      ) : (
        <img
          src={logo}
          alt="Logo Universidad Nacional Politécnica"
          className="logo"
        />
      )}
    </div>
  );
};

export default Content;
