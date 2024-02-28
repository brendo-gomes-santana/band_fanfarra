import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../Service';

export const AuthContext = createContext({})

export default function AuthProvide({children}){
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
   
    async function logar(data){
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((value) => {
            setUser({
                id: value.user.uid,
                email: value.user.email
            })

            localStorage.setItem("@user", JSON.stringify({
                id: value.user.uid,
                email: value.user.email
            }))
            
            navigate('/painel') 
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    return(
        <AuthContext.Provider
            value={{
                user,
                logado: !!user,
                logar
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}