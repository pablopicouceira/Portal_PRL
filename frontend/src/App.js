import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Portada } from "./pages/Portada";
import { Login } from "./pages/Login";
import "./css/App.css";
import { Trabajadores } from "./pages/Trabajadores";
import { Actuaciones } from "./pages/Actuaciones";
import { AuthProvider } from "./context/auth-context";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/portada">
            <Portada />
          </Route>
          <Route path="/trabajadores">
            <Trabajadores />
          </Route>
          <Route path="/actuaciones">
            <Actuaciones />
          </Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
