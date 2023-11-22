import React, { createContext, useContext, useState, useEffect } from 'react';


const FavoritosContext = createContext();

export const useFavoritos = () => {
  return useContext(FavoritosContext);
};

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState(() => {
    const storedFavoritos = localStorage.getItem("favoritos");
    return storedFavoritos ? JSON.parse(storedFavoritos) : [];
  });


  const agregarAFavoritos = (creacion) => {
    setFavoritos([...favoritos, creacion]);
  };

  const eliminarDeFavoritos = (creacion) => {
    const nuevosFavoritos = favoritos.filter((tp) => tp !== creacion);
    setFavoritos(nuevosFavoritos);
  };
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);


  return (
    <FavoritosContext.Provider value={{ favoritos, agregarAFavoritos, eliminarDeFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
};
