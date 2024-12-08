import React, { useState } from 'react';
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
import MenuIcon from '../assets/icons/Icono Flecha al Lado del Administrador.svg'; // Ícono para plegar/expandir
import LogoIcon from '../assets/icons/Logo_unp_circulos.svg'; // Ícono del logo

const Sidebar = ({ onSelectActivos }) => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Estado para manejar el colapso

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed); // Cambia el estado
  };

  const handleActivosClick = () => {
    onSelectActivos(true); // Llama la función de onSelectActivos que cambiará el estado en el componente padre
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
        <li>
          <img src={CerrarSesionIcon} alt="Cerrar sesión" className="menu-icon" />
          {!isCollapsed && 'Cerrar sesión'}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
