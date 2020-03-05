import React, { useState } from "react";
//import "../css/WorkersList.css";

export function WorkersList({ workers, selectedIndex, onWorkerSelected }) {
  const [text, setText] = useState("");

  const onTextChange = e => {
    console.log(e.target.value);
  };

  const getData = () => {
    if (text) {
      const regex = new RegExp(text, "gmi");

      return workers.filter(worker =>
        regex.test(`${worker.nombre} ${worker.apellidos}`)
      );
    }

    return workers;
  };

  return (
    <React.Fragment>
      <input onChange={e => setText(e.target.value)} placeholder="Buscar" />
      <h1 style={{ color: "#1d3a68", margin: 10, fontSize: 24 }}>
        Trabajadores
      </h1>
      <ul className=".trabajadores-column1-container">
        {getData().map((worker, index) => (
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
