import React, { useEffect, useState } from "react";
import axios from "axios";
import './Home.css'
import Favoritos from './Favoritos'

function Home() {
  const [TPS, setTPS] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/script.json")
      .then((response) => {
        setTPS(response.data.TPS);
      });
  }, []);

  const handleFavoriteClick = (index) => {
    const TPSSeleccionada = TPS[index];
    setFavoritos((prevFavoritos) => [...prevFavoritos, { ...TPSSeleccionada }]);
  };

  return (
    <div className="home-container">
      <h1>TPS Destacados</h1>
      {mostrarFavoritos ? (
        <Favoritos favoritos={favoritos} setFavoritos={setFavoritos} />
      ) : (
        TPS.slice(0, 6).map((TPS, index) => (
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
        ))
      )}
      <button onClick={() => setMostrarFavoritos(!mostrarFavoritos)}>
        {mostrarFavoritos ? "Volver a TPS Destacados" : "Ir a Favoritos"}
      </button>
    </div>
  );
}

export default Home;
