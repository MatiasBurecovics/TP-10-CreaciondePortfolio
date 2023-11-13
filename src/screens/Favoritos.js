import React, { useEffect } from "react";

function Favoritos({ favoritos, setFavoritos }) {
  useEffect(() => {
    const storedFavoritos = localStorage.getItem("favoritos");
    if (storedFavoritos) {
      setFavoritos(JSON.parse(storedFavoritos));
    }
  }, [setFavoritos]);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const handleRemoveFavorite = (index) => {
    const nuevosFavoritos = [...favoritos];
    nuevosFavoritos.splice(index, 1);
    setFavoritos(nuevosFavoritos);
  };

  return (
    <div>
      <h2>Favoritos</h2>
      {favoritos.map((TPS, index) => (
        <div key={index}>
          <h3>{TPS.titulo}</h3>
          <p>{TPS.descripcion}</p>
          <img src={TPS.imagenes} alt={TPS.titulo} />
          <p>Fecha de Creación: {TPS.fechaCreacion}</p>
          <a href={TPS.url} target="_blank" rel="noopener noreferrer">
            Github con el proyecto
          </a>
          <button onClick={() => handleRemoveFavorite(index)}>Eliminar de Favoritos</button>
        </div>
      ))}
    </div>
  );
}

export default Favoritos;
