import React from 'react';


import SidebarMenu from '../componentes/SidebarMenu';
import NavBar from '../componentes/Navbar';
import Main from '../componentes/Main';
import UserPage from '../componentes/UserPage';

function DadosDoClliente() {
  return (
    <div className="app-container">
      <SidebarMenu />
      <div className="main-content">
        <NavBar />
        <UserPage/>
      </div>
    </div>
  );
}
export default DadosDoClliente;


