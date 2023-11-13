import React, { useState } from 'react';
import './App.css'; 

const UsuarioEntrada = ({ onUsuarioInputChange }) => {
  const [nome, setNome] = useState('');

  const handleInputChange = (e) => {
    setNome(e.target.value);
    onUsuarioInputChange(e.target.value);
  };

  return (
    <div>
      <input
        className="input-style"
        type="text"
        id="nome"
        value={nome}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default UsuarioEntrada;
