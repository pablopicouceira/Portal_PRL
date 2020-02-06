import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <p>Portal Gestión PRL</p>
      <div>
        <Link to="/panel">Panel</Link>
      </div>
      <div>
        <Link to="/actuaciones">Actuaciones</Link>;
      </div>
      <div>
        <Link to="/trabajadores">Trabajadores</Link>;
      </div>
    </header>
  );
}
