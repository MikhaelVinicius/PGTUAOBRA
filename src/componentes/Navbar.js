import React from 'react';
import './NavBar.css';
import { FaBell } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-title">Tua Obra</h1>
      </div>
      <div className="navbar-center">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="search-bar"
        />
      </div>
      <div className="navbar-right">
        <FaBell className="notification-icon" />
      </div>
    </nav>
  );
};

export default NavBar;
