import React, { useState } from 'react';
import blockedImage from './img/blocked.jpg';
import approvedImage from './img/approved.jpg';

const VerificacaoLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
        <h1>Tarefa 2</h1>
      {loggedIn ? (
        <div>
          <h2>Seja bem-vindo!</h2>
          <img width='10%' src={approvedImage} alt='Imagem aprovada'></img>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Por favor, faça o login.</h2>
          <img width='10%' src={blockedImage} alt='Imagem bloqueada'></img>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default VerificacaoLogin;
