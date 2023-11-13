import React from 'react';
import './App.css'; 

const UsuarioSaida = ({ nome }) => {
  return (
    <div className="usuario-saida">
      <p>Olá, caro usuário {nome}</p>
      <p>Seja bem-vindo!</p>
    </div>
  );
};

export default UsuarioSaida;
