import React from "react";

export function Worker({ worker = {} }) {
  return (
    <React.Fragment>
      <p>{worker.id}</p>
      <p>{worker.nombre}</p>
      <p>{worker.apellidos}</p>
      <p>{worker.dni}</p>
    </React.Fragment>
  );
}
