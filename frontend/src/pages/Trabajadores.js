import React, { useEffect } from "react";
import { getWorkers } from "../http/workersService";
import { useAuth } from "../context/auth-context";

export function Trabajadores() {
  const { currentUser } = useAuth();

  useEffect(() => {
    getWorkers(currentUser.accessToken);
  });

  return (
    <div className="App">
      <button>Ver Trabajadores</button>
      <p>Trabajadores</p>
    </div>
  );
}
