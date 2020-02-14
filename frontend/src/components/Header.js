import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

export function Header({ title, onLogout }) {
  return (
    <header>
      <p>{title}</p>
      <nav>
        <div>
          <Link to="/panel">Panel</Link>
        </div>
        <div>
          <Link to="/actuaciones">Actuaciones</Link>
        </div>
        <div>
          <Link to="/trabajadores">Trabajadores</Link>
        </div>
        <div>
          <a href="/" onClick={onLogout}>
            Salir
          </a>
        </div>
      </nav>
    </header>
  );
}
