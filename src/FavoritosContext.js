import React, { createContext, useContext, useState } from 'react';

const FavoritosContext = createContext();

export const useFavoritos = () => {
  return useContext(FavoritosContext);
};

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const agregarAFavoritos = (creacion) => {
    setFavoritos([...favoritos, creacion]);
  };

  const eliminarDeFavoritos = (creacion) => {
    const nuevosFavoritos = favoritos.filter((tp) => tp !== creacion);
    setFavoritos(nuevosFavoritos);
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, agregarAFavoritos, eliminarDeFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
};
