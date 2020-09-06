import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Banner from './components/Banner/Banner';
import SobreNosotros from './components/SobreNosotros/SobreNosotros';
import IconosProductos from './components/IconosProductos/IconosProductos';
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <body>
      <Nav />
      <main>
        <Banner />
        <SobreNosotros />
        <IconosProductos />
        <Contacto />
      </main>
      <script src="./main.js"></script>
    </body>
  );
}

export default App;
