import React from "react";

export function Worker({
  worker = {},
  onDeactivateWorker,
  onUpdateWorker,
  activeWorker
}) {
  return (
    <React.Fragment>
      <p>{worker.id}</p>
      <p>{worker.nombre}</p>
      <p>{worker.apellidos}</p>
      <p>{worker.dni}</p>

      {activeWorker ? (
        <button onClick={() => onDeactivateWorker(worker.id)}>
          Activar Trabajador
        </button>
      ) : (
        <button onClick={() => onDeactivateWorker(worker.id)}>
          Desactivar Trabajador
        </button>
      )}

      <button onClick={() => onUpdateWorker(worker.id)}>
        Actualizar Trabajador
      </button>
    </React.Fragment>
  );
}
