import React from 'react';


import SidebarMenu from '../componentes/SidebarMenu';
import NavBar from '../componentes/Navbar';
import Main from '../componentes/Main';

function Homepage() {
  return (
    <div className="app-container">
      <SidebarMenu />
      <div className="main-content">
        <NavBar />
        <Main />
      </div>
    </div>
  );
}
export default Homepage;

