import React from "react";

export function Worker({
  worker = {},
  onDeactivateWorker,

  activeWorker,
  inactiveWorker = {},
  onReactivateWorker
}) {
  return (
    <React.Fragment>
      {activeWorker ? (
        <button
          className="desactivar-trabajador"
          onClick={() => onReactivateWorker(inactiveWorker.id)}
        >
          Reactivar Trabajador
        </button>
      ) : (
        <button
          className="desactivar-trabajador"
          onClick={() => onDeactivateWorker(worker.id)}
        >
          Desactivar Trabajador
        </button>
      )}
    </React.Fragment>
  );
}
