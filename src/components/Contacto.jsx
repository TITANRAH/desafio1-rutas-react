import React from "react";

function Contacto() {
  return (
    <div className="contacto mt-5">
      <h1>Cuentanos, ¿En que te podemos ayudar?</h1>

      <div className="text-center mt-3">
        <div className="input-nombre">
          <label className="mt-1" htmlFor="nombre">Nombre:</label>
          <input className="form-control" type="text" name="nombre" />
        </div>

        <div className="input-text-area mt-3">
          <label className="mt-1" htmlFor="descripcion">Descripción:</label>
          <textarea className="form-control" name="descripcion" id="" cols="30" rows="5"></textarea>
        </div>

        <div className="mt-3">
            <button className="btn btn-danger">Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
