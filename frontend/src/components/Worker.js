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
          className="trabajadores-column1-square-btn"
          onClick={() => onReactivateWorker(inactiveWorker.id)}
        >
          Reactivar Trabajador
        </button>
      ) : (
        <button
          className="trabajadores-column1-square-btn"
          onClick={() => onDeactivateWorker(worker.id)}
        >
          Desactivar Trabajador
        </button>
      )}
    </React.Fragment>
  );
}
