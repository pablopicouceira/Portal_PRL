import React from "react";
import { Link } from "react-router-dom";
//import "../css/Header.css";

const links = [
  {
    id: "panel",
    to: "/panel",
    name: "Panel"
  },
  {
    id: "actuaciones",
    to: "/actuaciones",
    name: "Actuaciones"
  },
  {
    id: "trabajadores",
    to: "/trabajadores",
    name: "Trabajadores"
  }
];

export function Header({ title, onLogout, show }) {
  return (
    <header>
      <h1>{title}</h1>
      <div>
        <nav>
          {links
            .filter(l => show.includes(l.id))
            .map(l => (
              <Link to={l.to}>{l.name}</Link>
            ))}
        </nav>
        <a href="/" onClick={onLogout}>
          Salir
        </a>
      </div>
    </header>
  );
}

Header.defaultProps = {
  show: ["panel", "actuaciones", "trabajadores"]
};
