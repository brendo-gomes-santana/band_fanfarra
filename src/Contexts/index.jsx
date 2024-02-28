import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { auth } from '../Service';

export const AuthContext = createContext({})

export default function AuthProvide({children}){
    const navigate = useNavigate();
    
    const [user, setUser] = useState(null);
    const [carregando, setCarregando] = useState(true);

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

    async function deslogar(){
        signOut(auth)
        localStorage.clear()
        setUser(null)
        navigate('/')
    }

    useEffect(() => {
        (async() => {
            
            const user = JSON.parse(localStorage.getItem('@user'))

            
            if(user){
                setCarregando(false)
                setUser(user);
                return;
            }
            setCarregando(false)
            setUser(null)
        })()
    },[setUser])
    return(
        <AuthContext.Provider
            value={{
                user,
                logado: !!user,
                carregando,
                logar,
                deslogar
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}