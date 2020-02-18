import React, { useEffect, useState, Component } from "react";
import { getWorkersByUser } from "../http/usersService";

export function WorkersRegisteredByUser() {
  const [workers, setWorkers] = useState([]);
  useEffect(() => {
    getWorkersByUser().then(response => setWorkers(response.data));
  }, []);
  console.log(workers);
  return <h1>{workers.length} trabajadores registrados</h1>;
}
