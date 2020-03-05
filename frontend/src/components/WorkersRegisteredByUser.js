import React, { useEffect, useState, Component } from "react";
import { getWorkersByUser } from "../http/usersService";

export function WorkersRegisteredByUser({ workers }) {
  return (
    <h3>
      <span className="valoracion-span">{workers.length}</span> trabajadores
      registrados
    </h3>
  );
}
