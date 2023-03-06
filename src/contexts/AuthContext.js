import React, { createContext,useState} from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){

    
    return(
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

// Funcao para transportar o token de usuario entre os componentes.