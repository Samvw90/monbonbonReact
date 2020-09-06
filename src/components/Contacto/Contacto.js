import React from 'react';

function Contacto() {
  return (
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
  );
}

export default Contacto;
