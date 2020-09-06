import React from 'react';
import './App.css';

function App() {
  return (
    <body>
      <header>
        <nav id="nav-bar" className="large-screen">
          <a href="#">
            <span>SOBRE NOSOTROS</span>
          </a>
          <div className="rayita"></div>
          <a href="#">
            <span>PRODUCTOS</span>
          </a>
          <div className="rayita"></div>
          <a href="">
            <span>GALERIA</span>
          </a>
          <div className="rayita"></div>
          <a href="">
            <span>CONTACTO</span>
          </a>
          <div id="exit" className="exit">
            X
          </div>
          <div className="sobre-nosotros-corazon">
            <img src={require('./imagenes/corazon 1.png')} alt="logo-corazon" />
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
      <main>
        <section id="logos" className="banner">
          <img
            src={require('./imagenes/logoweb-01.png')}
            alt="monbonbon-logo"
          />
        </section>
        <section className="sobre-nosotros">
          <div className="texto-sobre-nosotros">
            <div className="sobre-nosotros-titulo">
              <h1>SOBRE NOSOTROS</h1>
            </div>
            <div className="sobre-nosotros-parrafo">
              <p>
                Mon Bonbon es un emprendimiento Manizaleño de las hermanas
                Juliana, Ángela y Sandra Pachón Cárdenas, que se unen con su
                talento para diseñar momentos especiales.
              </p>
              <br />
              <p>
                Cuando se trata de sorprender a las personas que amas y
                demostrarles lo valiosas que son para ti, Mon Bonbon te acompaña
                y hace que eso que quieres se haga realidad con regalos
                empacados con elegancia, y creatividad.
              </p>
            </div>
          </div>
        </section>
        <section className="mensaje-sobre-nosotros">
          <img
            src={require('./imagenes/FRASES MB-01.png')}
            alt="frase-monbonbon"
          />
          <div className="background-container">
            <div className="square-1"></div>
            <div className="square-2"></div>
          </div>
        </section>
        <section className="contenedor">
          <div className="icon-row">
            <img
              src={require('./imagenes/iconosmb-01.png')}
              alt=""
              className="icono"
            />
            <img
              src={require('./imagenes/iconosmb-02.png')}
              alt=""
              className="icono"
            />
            <img
              src={require('./imagenes/iconosmb-03.png')}
              alt=""
              className="icono"
            />
            <img
              src={require('./imagenes/iconosmb-04.png')}
              alt=""
              className="icono"
            />
            <img
              src={require('./imagenes/iconosmb-05.png')}
              alt=""
              className="icono"
            />
            <img
              src={require('./imagenes/iconosmb-06.png')}
              alt=""
              className="icono"
            />
            <img
              src={require('./imagenes/iconosmb-07.png')}
              alt=""
              className="icono"
            />
            <img
              src={require('./imagenes/iconosmb-08.png')}
              alt=""
              className="icono"
            />
          </div>
        </section>
        <section className="contenedor">
          <form
            className="form"
            action="https://formspree.io/mlepkbgd"
            method="POST"
          >
            <label>
              <p>Tu nombre:</p>
              <input type="text" name="name" />
            </label>
            <label>
              <p>Tu correo:</p>
              <input type="text" name="_replyto" />
            </label>
            <label>
              <p>Mensaje:</p>
              <textarea name="message"></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <script src="./main.js"></script>
    </body>
  );
}

export default App;
