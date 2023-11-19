import React, { useEffect, useState } from "react";
import axios from "axios";
import './Home.css'
import { useFavoritos } from '../FavoritosContext';

function Home() {
  const { agregarAFavoritos } = useFavoritos();

  const [TPS, setTPS] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3000/script.json")
      .then((response) => {
        setTPS(response.data.TPS);
      });
  }, []);

  return (
    <div className="home-container">
      <h1>Bienvenido a la Página</h1>
      <p>Descubre estos 6 TPS destacados:</p>
      <div className="creaciones">
        {TPS.slice(0, 6).map((TPS, index) => (
          <div className="creacion-card" key={index}>
            <h3>{TPS.titulo}</h3>
            <p>{TPS.descripcion}</p>
            <img src={TPS.imagenes} alt={TPS.titulo} />
            <p>Fecha de Creación: {TPS.fechaCreacion}</p>
            <a href={TPS.url} target="_blank" rel="noopener noreferrer">
              Github con el proyecto
            </a>
            <button onClick={() => agregarAFavoritos(TPS)}>Agregar a favoritos</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;