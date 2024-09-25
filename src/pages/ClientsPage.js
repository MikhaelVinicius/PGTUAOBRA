// ClientsPage.js
import React from 'react';
import ClientCard from '../componentes/ClientCard';// Ajuste o caminho conforme necessário


const ClientsPage = ({ clients }) => {
 
  if (!Array.isArray(clients)) {
    return <div>Não há dados disponíveis.</div>; 
  }

  return (
    <div className="client-grid">
      {clients.map((client, index) => (
        <ClientCard key={index} client={client} />
      ))}
    </div>
  );
};

export default ClientsPage;
