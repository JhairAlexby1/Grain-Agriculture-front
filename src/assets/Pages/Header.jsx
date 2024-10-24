import React from 'react';
import '../Pages/Header.css'; 
import logo from '../img/logo.png'; 

function Header() {
  return (
    <header className="header flex items-center justify-between p-4">
      <div className="header-title">
        {/* añadimos clases de Tailwind para tamaño y responsividad */}
        <img src={logo} alt="Logo" className="logo-img w-16 h-auto md:w-24" />
      </div>
      <nav className="nav flex space-x-4">
        <button className="nav-button">Características</button>
        <button className="nav-button">Cómo funciona</button>
        <button className="nav-button nav-button-yellow">Iniciar Sesión</button>
      </nav>
    </header>
  );
}

export default Header;