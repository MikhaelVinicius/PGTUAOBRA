import React, { useState } from 'react';
import { FaWhatsapp, FaFileAlt } from 'react-icons/fa'; 
import './ClientCard.css';

const ClientCard = ({ client }) => {
  const [showModal, setShowModal] = useState(false);

 
  const handleFileClick = () => {
    setShowModal(true);
  };


  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="client-card">
      <img src={client.profilePicture} alt="Profile" className="client-picture" />
      <h3 className="client-name">{client.name}</h3>
      <div className="icons">
        <a href={`https://wa.me/${client.whatsapp}`} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon whatsapp-icon" />
        </a>
        {}
        <FaFileAlt className="icon file-icon" onClick={handleFileClick} />
      </div>

      {}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{client.name}</h2>
            <p><strong>Descrição:</strong> {client.description}</p>
            <p><strong>Horário:</strong> {client.schedule}</p>
            <p><strong>Forma de Pagamento:</strong> {client.paymentMethod}</p>
            <p><strong>Frete:</strong> {client.shipping}</p>
            <p><strong>Contato:</strong> {client.contact}</p>
            <p><strong>Email:</strong> {client.email}</p>
            <button className="close-button" onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientCard;
