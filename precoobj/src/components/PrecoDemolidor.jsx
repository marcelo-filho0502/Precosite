import React, { useState, useEffect } from 'react';

function PrecoDemolidor() {
  const [preco, setPreco] = useState('Carregando...');
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const API_URL = 'http://localhost:3001/api/preco-demolidor'; 

    async function fetchPreco() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json(); 

        setPreco(data.preco);
      } catch (e) {
        console.error("Erro no frontend:", e);
        setErro('Não foi possível carregar o preço.');
        setPreco('Indisponível');
      }
    }

    fetchPreco();
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Preço do Demolidor (Panini)</h3>
      {erro ? (
        <p style={{ color: 'red' }}>{erro}</p>
      ) : (
        <p>Preço Atual: <strong>{preco}</strong></p>
      )}
      <p style={{ fontSize: 'x-small', color: 'gray' }}>
        Dados obtidos via API de Web Scraping.
      </p>
    </div>
  );
}

export default PrecoDemolidor;