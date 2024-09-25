import React from 'react';
import './ErroModal.css';

const ErroModal = ({ show, errors, onClose }) => {
  if (!show) return null; 

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Erro</h2>
        <ul className="error-list">
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
        <button className="close-button" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ErroModal;
