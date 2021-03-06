import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export function PrivateRoute({ children, ...others }) {
  const { isAuthenticated } = useAuth();

  return (
    <React.Fragment>
      {isAuthenticated ? (
        <Route {...others}>{children}</Route>
      ) : (
        <Redirect to="/" />
      )}
    </React.Fragment>
  );
}
