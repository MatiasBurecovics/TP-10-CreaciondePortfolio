import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from '../src/screens/Home';
import MisCreaciones from '../src/screens/MisCreaciones';
import InfoPersonal from '../src/screens/InfoPersonal';
import Favoritos from '../src/screens/Favoritos';
import ContactoFooter from './components/ContactoFooter';
import Equipo from '../src/screens/Equipo';
import { FavoritosProvider } from './FavoritosContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritosProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/miscreaciones" element={<MisCreaciones />} />
            <Route path="/infopersonal" element={<InfoPersonal />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/equipo" element={<Equipo />} />
          </Route>
        </Routes>
      <ContactoFooter />
      </FavoritosProvider>
    </BrowserRouter>
  </React.StrictMode>
);
