import React from "react";
import { useFavoritos } from '../FavoritosContext';
import './Favoritos.css'

function Favoritos() {
  const { favoritos, eliminarDeFavoritos } = useFavoritos();

  return (
    <div className="favoritos-container">
      <h1>Tus TPS Favoritos</h1>

      {favoritos.length === 0 ? (
        <p>No hay TPS favoritos en este momento.</p>
      ) : (
        favoritos.map((tp, index) => (
          <div className="favorito-card" key={index}>
            <h3>{tp.titulo}</h3>
            <p>{tp.descripcion}</p>
            <img src={tp.imagenes} alt={tp.titulo} />
            <p>Fecha de Creación: {tp.fechaCreacion}</p>
            <a href={tp.url} target="_blank" rel="noopener noreferrer">
              Github con el proyecto
            </a>
            <button onClick={() => eliminarDeFavoritos(tp)}>Eliminar de favoritos</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Favoritos;
