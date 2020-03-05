import React from "react";
import { Link } from "react-router-dom";
//import "../css/Header.css";
//import Logo from "../img/Screenshot from 2020-02-21 17-24-58.png";

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
      {/*<img src={Logo} />*/}
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
          <i
            style={{ color: "white", marginLeft: 10 }}
            className="fas fa-sign-out-alt"
          ></i>
        </a>
      </div>
    </header>
  );
}

Header.defaultProps = {
  show: ["panel", "actuaciones", "trabajadores"]
};
