import React from "react";
import { Header } from "../components/Header";

export function Panel() {
  return (
    <React.Fragment>
      <Header title="Portal Gestión PRL" />

      <p className="caja">Actuaciones</p>
      <p className="caja">Trabajadores</p>
    </React.Fragment>
  );
}
