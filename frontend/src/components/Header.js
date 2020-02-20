import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

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
      <p>{title}</p>
      <nav>
        {links
          .filter(l => show.includes(l.id))
          .map(l => (
            <div>
              <Link to={l.to}>{l.name}</Link>
            </div>
          ))}
        <div>
          <a href="/" onClick={onLogout}>
            Salir
          </a>
        </div>
      </nav>
    </header>
  );
}

Header.defaultProps = {
  show: ["panel", "actuaciones", "trabajadores"]
};
