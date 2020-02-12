import React from "react";
import { Header } from "./Header";

export function InactiveWorkersList({
  workers,
  selectedIndex,
  onWorkerSelected
}) {
  return (
    <React.Fragment>
      {console.log("Inactivos")}
      <div className="App">
        <h1>Inactivos</h1>
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
