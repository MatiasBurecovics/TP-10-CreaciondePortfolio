import React, { useState } from 'react';

const Home = ({ creaciones }) => {
  const [favoritos, setFavoritos] = useState([]);

  const agregarFavorito = (creacion) => {
    setFavoritos([...favoritos, creacion]);
  }

  return (
    <div>
      <h1>Creaciones Destacadas</h1>
      {creaciones.slice(0, 6).map(creacion => (
        <div key={creacion.titulo}>
          <h2>{creacion.titulo}</h2>
          <p>{creacion.descripcion}</p>
          <button onClick={() => agregarFavorito(creacion)}>Agregar a Favoritos</button>
        </div>
      ))}

      <h2>Favoritos</h2>
      {favoritos.map(favorito => (
        <div key={favorito.titulo}>
          <h3>{favorito.titulo}</h3>
        </div>
      ))}
    </div>
  );
}

export default Home;
