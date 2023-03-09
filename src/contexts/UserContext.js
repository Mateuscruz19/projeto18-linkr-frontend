import { isEmptyStatement } from "@babel/types";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import isEmpty from "../utils/functions/isEmpty";
import { getUserByToken } from "../services/api";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const { token, setToken } = useContext(AuthContext);

  useEffect(() => {
    if (user && !isEmpty(user) || isEmpty(token)) return;

    const getCurrentUser = async () => {
      try {
        const { data: userResult } = await getUserByToken(token);

        setUser(userResult);
      } catch (error) {
        console.log(error);
      }
    };

    getCurrentUser();
  }, [setUser, token, user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(useContext);

export default UserProvider;
