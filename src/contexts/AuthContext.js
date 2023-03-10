import React, { createContext, useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      const notAllowToLoggedUsers =
        pathname === "/" || pathname === "/registro";
      const recoveredUserJson = JSON.parse(recoveredUser);
      setToken(recoveredUserJson.token);
      delete recoveredUserJson.token;
      setUser(recoveredUserJson);

      if (notAllowToLoggedUsers) navigate("/timeline");
    }

    setLoading(false);
  }, [loading]);

  const login = (data) => {
    const loggedUser = data;

    localStorage.setItem("user", JSON.stringify(loggedUser));

    setToken((item) => (item = data.token));
    delete loggedUser.token;
    setUser((item) => (item = data.user));

    setLoading(true);

    navigate("/timeline");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        setUser,
        token,
        setToken,
        loading,
        setLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useUser = () => useContext(AuthContext);

// Funcao para transportar o token de usuario entre os componentes.
