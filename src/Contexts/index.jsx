import { createContext, useState } from "react";

export const AuthContext = createContext({})

export default function AuthProvide({children}){

    const [user, setUser] = useState(null);
   
    
    return(
        <AuthContext.Provider
            value={{
                user,
                logado: !!user
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}