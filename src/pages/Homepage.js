import React from 'react';


import SidebarMenu from '../componentes/SidebarMenu';
import NavBar from '../componentes/Navbar';
import Main from '../componentes/Main';
import UserPage from '../componentes/UserPage';
import ClientsPage from './ClientsPage';



function Homepage() {
  const renderUserProfile = (user) => <UserPage user={user} />; 
  const renderClientsPage = (clients) => <ClientsPage clients={clients} />;
  
  const dummyUserData = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },  
  ];

  const dummyClientsData = [
    {
      profilePicture: 'https://via.placeholder.com/150',
      name: 'Cliente 1',
      whatsapp: '1234567890',
      description: 'Descrição do Cliente 1',
      schedule: '9h - 17h',
      paymentMethod: 'Cartão de Crédito',
      shipping: 'Grátis',
      contact: 'Contato Cliente 1',
      email: 'cliente1@example.com',
    },
    {
      profilePicture: 'https://via.placeholder.com/150',
      name: 'Cliente 2',
      whatsapp: '0987654321',
      description: 'Descrição do Cliente 2',
      schedule: '10h - 18h',
      paymentMethod: 'Boleto',
      shipping: 'R$ 10,00',
      contact: 'Contato Cliente 2',
      email: 'cliente2@example.com',
    },
 
  ];




  return (
    <div className="app-container">
      <SidebarMenu />
      <div className="main-content">
        <NavBar />
        <br/>
        <Main renderComponent={renderUserProfile} data={dummyUserData} />
      </div>
    </div>
  );
}
export default Homepage;


