import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <p>Portal Gestión PRLx</p>
      <Link to="/panel">Panel</Link>;<Link to="/actuaciones">Actuaciones</Link>;
      <Link to="/trabajadores">Trabajadores</Link>;
    </header>
  );
}
