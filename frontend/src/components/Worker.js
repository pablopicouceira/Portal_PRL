import React from "react";

export function Worker({ worker = {}, onDeactivateWorker }) {
  return (
    <React.Fragment>
      <p>{worker.id}</p>
      <p>{worker.nombre}</p>
      <p>{worker.apellidos}</p>
      <p>{worker.dni}</p>
      <button onClick={() => onDeactivateWorker(worker.id)}>
        Desactivar Trabajador
      </button>
    </React.Fragment>
  );
}
