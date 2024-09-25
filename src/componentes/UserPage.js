import React from 'react';
import './UserPage.css';

const UserPage = () => {
  const user = {
    name: 'João Silva',
    email: 'joao.silva@example.com',
    phone: '(11) 98765-4321',
    address: 'Rua das Flores, 123, São Paulo - SP',
    paymentMethod: 'Cartão de Crédito',
    deliveryMethod: 'Entrega via Correios',
  };

  return (
    <div className="user-profile">
      <h1>Perfil do Usuário</h1>
      <div className="user-info">
        <div className="user-data">
          <h3>Nome</h3>
          <p>{user.name}</p>
        </div>
        <div className="user-data">
          <h3>Email</h3>
          <p>{user.email}</p>
        </div>
        <div className="user-data">
          <h3>Telefone</h3>
          <p>{user.phone}</p>
        </div>
        <div className="user-data">
          <h3>Endereço</h3>
          <p>{user.address}</p>
        </div>
        <div className="user-data">
          <h3>Forma de Pagamento</h3>
          <p>{user.paymentMethod}</p>
        </div>
        <div className="user-data">
          <h3>Frete</h3>
          <p>{user.deliveryMethod}</p>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
