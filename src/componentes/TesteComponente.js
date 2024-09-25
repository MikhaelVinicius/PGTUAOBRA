import React, { useState } from 'react';
import ErroModal from './ErroModal';

const MyComponent = () => {
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const triggerError = () => {
   
    const backendErrors = ['Erro 1: Ocorreu um problema.', 'Erro 2: O campo está vazio.'];
    setErrorMessages(backendErrors);
    setShowErrorPopup(true);
  };

  return (
    <div>
      <button onClick={triggerError}>Disparar Erro</button>

      {}
      <ErroModal 
        show={showErrorPopup} 
        errors={errorMessages} 
        onClose={() => setShowErrorPopup(false)} 
      />
    </div>
  );
};

export default MyComponent;
