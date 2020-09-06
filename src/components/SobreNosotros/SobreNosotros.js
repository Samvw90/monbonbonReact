import React from 'react';

function SobreNosotros() {
  return (
    <>
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
              demostrarles lo valiosas que son para ti, Mon Bonbon te acompaña y
              hace que eso que quieres se haga realidad con regalos empacados
              con elegancia, y creatividad.
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
    </>
  );
}

export default SobreNosotros;
