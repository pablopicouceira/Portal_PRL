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
      {activeWorker ? (
        <button onClick={() => onReactivateWorker(inactiveWorker.id)}>
          Reactivar Trabajador
        </button>
      ) : (
        <button onClick={() => onDeactivateWorker(worker.id)}>
          Desactivar Trabajador
        </button>
      )}
    </React.Fragment>
  );
}
