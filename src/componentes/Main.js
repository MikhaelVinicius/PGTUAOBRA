import React from 'react';
import ClientCard from './ClientCard';
import './Main.css';

const clients = [
  {
    name: 'Cliente 1',
    profilePicture: 'https://via.placeholder.com/80',
    whatsapp: '5511999999999', 
    pageLink: '/cliente1', 
  },
  {
    name: 'Cliente 2',
    profilePicture: 'https://via.placeholder.com/80',
    whatsapp: '5511988888888',
    pageLink: '/cliente2',
  },
  
];

const Main = () => {
  return (
    <div className="main-content">
      <h2>Lista de Clientes</h2>
      <div className="client-grid">
        {clients.map((client, index) => (
          <ClientCard key={index} client={client} />
        ))}
      </div>
    </div>
  );
};

export default Main;
