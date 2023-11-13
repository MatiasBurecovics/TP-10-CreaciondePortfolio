import React, { useEffect, useState } from "react";
import axios from "axios";
import './Home.css'

function MisCreaciones() {
  const [TPS, setTPS] = useState([]);
  const [favoritos, setFavoritos] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3000/script.json")
    .then((response) => {
      setTPS(response.data.TPS);
    });
  }, []);
  const handleFavoriteClick = (index) => {
    const TPSSeleccionada = TPS[index];
    setFavoritos([...favoritos, TPSSeleccionada]);
  };

  return (
<div className="home-container">
      <h1>Todos mis tps</h1>
      {TPS.map((TPS, index) => (
        <div className="creacion-card" key={index}>
          <h3>{TPS.titulo}</h3>
          <p>{TPS.descripcion}</p>
          <img src={TPS.imagenes} alt={TPS.titulo} />
          <p>Fecha de Creación: {TPS.fechaCreacion}</p>
          <a href={TPS.url} target="_blank" rel="noopener noreferrer">
            Github con el proyecto
          </a>
          <button onClick={() => handleFavoriteClick(index)}>Agregar a Favoritos</button>
        </div>
      ))}
    </div>
  );
}

export default MisCreaciones;
