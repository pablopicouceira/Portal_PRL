import React from "react";
import { Link } from "react-router-dom";

export function Header({ title }) {
  return (
    <header>
      <p>{title}</p>
      <nav>
        <span>
          <Link to="/panel">Panel</Link>
        </span>
        <span>
          <Link to="/actuaciones">Actuaciones</Link>
        </span>
        <span>
          <Link to="/trabajadores">Trabajadores</Link>
        </span>
      </nav>
    </header>
  );
}
