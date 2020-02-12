import React from "react";
import { Header } from "./Header";

export function WorkersList({ workers, selectedIndex, onWorkerSelected }) {
  return (
    <React.Fragment>
      <div className="App">
        <h1>Trabajadores</h1>
        <ul>
          {workers.map((worker, index) => (
            <li
              key={worker.id}
              onClick={() => onWorkerSelected(index)}
              className={selectedIndex === index && "selected"}
            >
              {worker.apellidos}, {worker.nombre} {worker.dni}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
