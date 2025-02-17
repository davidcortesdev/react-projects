/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLogout } from "../../../store/auth/thunks";
import { useState } from 'react';

export const Navegador = ({ nombre, apellido1 }) => {
  
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para menú móvil

  const onLogout = () => {
    dispatch(startLogout());
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="main-nav">
      <div className="nav-brand">
        <span className="nav-logo">🚀</span>
        <h1 className="nav-title">Tablón de Empleado</h1>
      </div>

      {/* Botón de hamburguesa para móvil */}
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          onClick={toggleMenu}
        >
          🏠 Inicio
        </NavLink>
        <NavLink
          to="/chatpage"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          onClick={toggleMenu}
        >
          💬 Mensajes
        </NavLink>
        <NavLink
          to="/misiones"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          onClick={toggleMenu}
        >
          🧑‍🚀 Misiones
        </NavLink>
      </div>

      <div className="nav-profile-wrapper">
        <div className="nav-profile">
          <span className="profile-indicator">🟢</span>
          <span className="profile-name">
            {nombre} {apellido1}
          </span>
        </div>
        <div className="profile-dropdown">
          <button className="dropdown-item" onClick={onLogout}>
            🔴 Cerrar sesión
          </button>
        </div>
      </div>
    </nav>
  );
};