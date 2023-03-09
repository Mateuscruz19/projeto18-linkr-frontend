import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [token, setToken] = useState({});

  return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

// Funcao para transportar o token de usuario entre os componentes.
