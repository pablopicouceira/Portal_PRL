import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Panel } from "./pages/Panel";
import { Login } from "./pages/Login";
import "./css/App.css";
import { Trabajadores } from "./pages/Trabajadores";
import { Actuaciones } from "./pages/Actuaciones";
import { AuthProvider } from "./context/auth-context";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRoute path="/panel">
            <Panel />
          </PrivateRoute>
          <PrivateRoute path="/trabajadores">
            <Trabajadores />
          </PrivateRoute>
          <PrivateRoute path="/actuaciones">
            <Actuaciones />
          </PrivateRoute>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
