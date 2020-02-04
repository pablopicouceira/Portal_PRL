import React, { Children, useState, useContext } from "react";

const AuthContext = React.createContext();

const storedUser = JSON.parse(localStorage.getItem("currentUser"));

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(storedUser !== null);
  const [currentUser, setCurrentUser] = useState(storedUser);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        currentUser,
        setCurrentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
