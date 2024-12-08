import React from 'react';
import './Header.css';
import Lupa from '../assets/icons/Lupa de Busqueda Superior.svg'
import CalendarIcon from '../assets/icons/Calendario.svg'; // Ícono de calendario
import NotificationIcon from '../assets/icons/Campana de Notificacion.svg'; // Ícono de notificación
import HelpIcon from '../assets/icons/Boton de Ayuda.svg'; // Ícono de ayuda

const Header = ({ userName, userLocation }) => {
  return (
    <div className="header">
      <div className="search-container">
        <img src={Lupa} alt="Buscar" className="search-icon" />
        <input type="text" placeholder="Buscar..." className="search-bar" />
      </div>
      <div className="user-icons">
          <img src={CalendarIcon} alt="Calendario" className="icon" />
          <img src={NotificationIcon} alt="Notificaciones" className="icon" />
          <img src={HelpIcon} alt="Ayuda" className="icon" />
        </div>
      <div className="user-info">
        <div className="user-details">
          <span className="user-name">{userName}</span>
          <span className="user-location">{userLocation}</span>
        </div>      
      </div>
    </div>
  );
};

export default Header;
