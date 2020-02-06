import React from "react";
import { Link } from "react-router-dom";

export function Header({ title }) {
  return (
    <header>
      <p>{title}</p>
      <nav>
        <a>
          <Link to="/panel">Panel</Link>
        </a>
        <a>
          <Link to="/actuaciones">Actuaciones</Link>
        </a>
        <a>
          <Link to="/trabajadores">Trabajadores</Link>
        </a>
      </nav>
    </header>
  );
}
