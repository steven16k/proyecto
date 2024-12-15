//sidebar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

// Importación de íconos
import InicioIcon from '../assets/icons/Inicio.svg';
import MensajeIcon from '../assets/icons/Mensaje.svg';
import TodoListIcon from '../assets/icons/Todo List.svg';
import UsuarioIcon from '../assets/icons/Usuarios.svg';
import ConfiguracionIcon from '../assets/icons/Configuracion.svg';
import ActivosIcon from '../assets/icons/Activos Panel Izquierdo.svg';
import ProveedoresIcon from '../assets/icons/Proveedores Boton.svg';
import SalidaActivosIcon from '../assets/icons/Salida de Activos.svg';
import CerrarSesionIcon from '../assets/icons/Boton de Cerrar Sesion.svg';
import MenuIcon from '../assets/icons/Icono Flecha al Lado del Administrador.svg'; 
import LogoIcon from '../assets/icons/Logo_unp_circulos.svg';

const Sidebar = ({ onSelectActivos }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleActivosClick = () => {
    onSelectActivos(true); // Llama a la función que se pasa como prop
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Elimina el token de autenticación
    navigate('/login', { replace: true }); // Redirige a login y reemplaza el historial
    window.location.reload(); // Recarga la página para asegurarse de que el estado se actualice
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <img src={LogoIcon} alt="Logo UNP" className="logo-icon" />
        {!isCollapsed && <h2>Administrador</h2>}
        <button className="toggle-button" onClick={toggleSidebar}>
          <img src={MenuIcon} alt="Toggle Menu" />
        </button>
      </div>
      <ul className="menu">
        <li>
          <img src={InicioIcon} alt="Inicio" className="menu-icon" />
          {!isCollapsed && 'Inicio'}
        </li>
        <li>
          <img src={MensajeIcon} alt="Mensajes" className="menu-icon" />
          {!isCollapsed && 'Mensajes'}
        </li>
        <li>
          <img src={TodoListIcon} alt="Lista de tareas" className="menu-icon" />
          {!isCollapsed && 'Lista de tareas'}
        </li>
        <li>
          <img src={UsuarioIcon} alt="Usuarios" className="menu-icon" />
          {!isCollapsed && 'Usuarios'}
        </li>
        <li>
          <img src={ConfiguracionIcon} alt="Configuración" className="menu-icon" />
          {!isCollapsed && 'Configuración'}
        </li>
        <li onClick={handleActivosClick}>
          <img src={ActivosIcon} alt="Activos" className="menu-icon" />
          {!isCollapsed && 'Activos'}
        </li>
        <li>
          <img src={ProveedoresIcon} alt="Proveedores" className="menu-icon" />
          {!isCollapsed && 'Proveedores'}
        </li>
        <li>
          <img src={SalidaActivosIcon} alt="Salida de Activos" className="menu-icon" />
          {!isCollapsed && 'Salida de Activos'}
        </li>
        <li onClick={handleLogout}>
          <img src={CerrarSesionIcon} alt="Cerrar sesión" className="menu-icon" />
          {!isCollapsed && 'Cerrar sesión'}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
