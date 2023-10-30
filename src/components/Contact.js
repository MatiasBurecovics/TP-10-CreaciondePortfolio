import React from 'react';

const Contacto = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contacto</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea className="form-control" id="mensaje" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
          <div className="col-md-6">
            <h3>Redes Sociales</h3>
            <ul>
              <li><a href="URL_DE_TU_LINKEDIN" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              {/* Agrega enlaces a tus otras redes sociales si lo deseas */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contacto;
