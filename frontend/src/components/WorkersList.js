import React from "react";
//import "../css/WorkersList.css";

export function WorkersList({ workers, selectedIndex, onWorkerSelected }) {
  return (
    <React.Fragment>
      <div className="App">
        <h1>Trabajadores</h1>
        <ul className="li">
          {workers.map((worker, index) => (
            <li
              key={worker.id}
              onClick={() => onWorkerSelected(index)}
              className={selectedIndex === index && "WorkersList-selected"}
            >
              {worker.apellidos}, {worker.nombre} {worker.dni}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
