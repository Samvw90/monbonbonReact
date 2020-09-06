import React from 'react';

function Nav() {
  return (
    <header>
      <nav id="nav-bar" className="large-screen">
        <a href="/">
          <span>SOBRE NOSOTROS</span>
        </a>
        <div className="rayita"></div>
        <a href="/">
          <span>PRODUCTOS</span>
        </a>
        <div className="rayita"></div>
        <a href="/">
          <span>GALERIA</span>
        </a>
        <div className="rayita"></div>
        <a href="/">
          <span>CONTACTO</span>
        </a>
        <div id="exit" className="exit">
          X
        </div>
        <div className="sobre-nosotros-corazon">
          <img src={require('./imagenes/corazon1.png')} alt="logo-corazon" />
        </div>
      </nav>
      <div id="container" className="container">
        <div id="burger" className="burger">
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
