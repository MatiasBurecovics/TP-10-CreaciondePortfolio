import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from '../src/screens/Home';
import MisCreaciones from '../src/screens/MisCreaciones'
import InfoPersonal from '../src/screens/InfoPersonal';
import Favoritos from '../src/screens/Favoritos'
import ContactoFooter from './components/ContactoFooter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/miscreaciones" element={<MisCreaciones />}></Route>
          <Route path="/infopersonal" element={<InfoPersonal />}></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
          </Route>
        </Routes>
        <ContactoFooter/>
    </BrowserRouter>
  
  </React.StrictMode>
);