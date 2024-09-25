import React from 'react';
import { FaHome, FaUser, FaSignOutAlt } from 'react-icons/fa';
import './SidebarMenu.css';

const SidebarMenu = () => {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <img
          src="https://via.placeholder.com/150" 
          alt="Profile"
          className="profile-picture"
        />
        <h2 className="profile-name">Seu Nome</h2>
      </div>
      <div className="menu-items">
        <button className="menu-button">
          <FaHome className="menu-icon" /> Clientes
        </button>
        <button className="menu-button">
          <FaUser className="menu-icon" /> Meus Dados
        </button>
        <button className="menu-button">
          <FaSignOutAlt className="menu-icon" /> Sair
        </button>
      </div>
    </div>
  );
};

export default SidebarMenu;
