import React from "react";
import { Header } from "./Header";

export function InactiveWorkersList({
  workers,
  selectedIndex,
  onWorkerSelected
}) {
  return (
    <React.Fragment>
      <h1>Inactivos</h1>
      <ul>
        {workers.map((worker, index) => (
          <li
            key={worker.id}
            onClick={() => onWorkerSelected(index)}
            className={selectedIndex === index && "WorkersList-selected"}
          >
            {worker.apellidos}, {worker.nombre}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
