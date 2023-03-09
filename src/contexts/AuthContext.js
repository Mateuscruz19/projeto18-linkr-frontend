import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const tokenLocalStorage = localStorage.getItem("linkrAcess");
  const [token, setToken] = useState(
    tokenLocalStorage ? tokenLocalStorage : {}
  );

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

// Funcao para transportar o token de usuario entre os componentes.
