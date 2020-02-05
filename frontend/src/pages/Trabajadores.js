import React, { useState, useEffect } from "react";
import { getWorkers } from "../http/workersService";
import { useAuth } from "../context/auth-context";

export function Trabajadores() {
  const { currentUser } = useAuth();
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    getWorkers(currentUser.accessToken).then(response => {
      setWorkers(response.data);
    });
  }, []);

  return (
    <div className="App">
      <button>Ver Trabajadores</button>
      <h1>Trabajadores</h1>
      <ul>
        {workers.map(worker => (
          <li key={worker.id}>
            {worker.apellidos}, {worker.nombre} {worker.dni}
          </li>
        ))}
      </ul>
    </div>
  );
}
