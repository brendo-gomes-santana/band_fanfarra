import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function Logado({children}) {

    const [logado, setLogado] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        (async() => {
            
            const user = JSON.parse(localStorage.getItem('@user'))

            
            if(user){
                setLogado(user);
                setCarregando(false)
                return;
            }

            setLogado(false)
            setCarregando(false)

        })()
    },[])
    if(carregando){
        return(
            <div>
                Carregando
            </div>
        )
    }
    if(!logado){
        return <Navigate to="/login"/>
    }

    return children
}

  
