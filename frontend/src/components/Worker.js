import React from "react";

export function Worker({
  worker = {},
  onDeactivateWorker,
  onUpdateWorker,
  activeWorker,
  inactiveWorker = {},
  onReactivateWorker
}) {
  return (
    <React.Fragment>
      <p>{worker.id}</p>
      <p>{worker.nombre}</p>
      <p>{worker.apellidos}</p>
      <p>{worker.dni}</p>
      <p>{inactiveWorker.id}</p>
      <p>{inactiveWorker.nombre}</p>
      <p>{inactiveWorker.apellidos}</p>
      <p>{inactiveWorker.dni}</p>

      {activeWorker ? (
        <button onClick={() => onReactivateWorker(inactiveWorker.id)}>
          Reactivar Trabajador
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
