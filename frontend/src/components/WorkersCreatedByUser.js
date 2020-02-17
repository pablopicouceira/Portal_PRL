import React, { useEffect, useState, Component } from "react";
import { getWorkersByUser } from "../http/workersService";

export function WorkersCreatedByUser() {
  const [workers, setWorkers] = useState([]);
  useEffect(() => {
    getWorkersByUser().then(response => setWorkers(response.data));
  }, []);
  console.log(workers);
  return <h1>{workers.length} trabajadores registrados</h1>;
}
