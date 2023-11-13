// src/App.js
import React, { useState } from 'react';
import UsuarioEntrada from './UsuarioEntrada';
import UsuarioSaida from './UsuarioSaida';

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');

  const handleUsuarioInputChange = (nome) => {
    setNomeUsuario(nome);
  };

  const nomeUsuarioFixo = 'passado_via_props'; 

  return (
    <div>
      <h1>Meu App React</h1>
      <UsuarioEntrada onUsuarioInputChange={handleUsuarioInputChange} />
      <UsuarioSaida nome={nomeUsuarioFixo} />
      <UsuarioSaida nome={nomeUsuario} />
    </div>
  );
}

export default App;
