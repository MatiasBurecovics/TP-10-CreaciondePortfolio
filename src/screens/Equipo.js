import React from 'react';
import Personas from '../Listado.js';

 function Equipo() {
  return (
    <div className="home-container">
      <h1 className="home-heading">Equipo de trabajo</h1>
      <ul className="person-list">
        {Personas.slice(0, 20).map((persona) => (
          <li className="person-list-item" key={persona.id}>
            <div className="person-details">
              <h3>{`${persona.nombre} ${persona.apellido}`}</h3>
              <p>Email: {persona.email}</p>
              <p>Edad: {persona.edad}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Equipo;