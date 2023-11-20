import React, { useState } from 'react';

const Contador = () => {
  const [texto, setTexto] = useState('');

  const handleChange = (event) => {
    const novoTexto = event.target.value;
    setTexto(novoTexto);
  };

  return (
    <div>
        <h1>Tarefa 1</h1>
      <label htmlFor="texto">Digite seu texto:</label>
      <input
        type="text"
        id="texto"
        value={texto}
        onChange={handleChange}
      />
      <p>Total de caracteres: {texto.length}</p>
    </div>
  );
};

export default Contador;
