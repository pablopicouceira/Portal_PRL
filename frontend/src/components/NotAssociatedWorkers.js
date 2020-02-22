import React, { useEffect, useState, Component } from "react";
import { getNotAssociatedWorkersToProject } from "../http/projectsService";

export function NotAssociatedWorkers({ workers, onChange }) {
  return (
    <div className="App">
      <h1>Asociar Trabajadores</h1>
      {workers.length ? (
        <select onChange={e => onChange(e.target.value)}>
          {[
            { id: 0, apellidos: "Selecciona un trabajador", nombre: null },
            ...workers
          ].map((worker, index) => (
            <option key={worker.id} value={worker.id}>
              {worker.apellidos}, {worker.nombre}
            </option>
          ))}
        </select>
      ) : (
        "El proyecto aún no tiene trabajadores asociados"
      )}
    </div>
  );
}

NotAssociatedWorkers.defaultProps = {
  worker: []
};
