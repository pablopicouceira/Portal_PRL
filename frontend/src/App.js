import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Portada } from "./pages/Portada";
import { Login } from "./pages/Login";

import "./css/App.css";

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route exact path="/">
          <Portada />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </switch>
    </BrowserRouter>
  );
}

export default App;
