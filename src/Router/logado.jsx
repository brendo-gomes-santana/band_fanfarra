import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function Logado({children}) {

    const [logado, setLogado] = useState(null);

    useEffect(() => {
        (async() => {
            
            const user = JSON.parse(localStorage.getItem('@user'))

            if(user){
                setLogado(user);
                return;
            }

            setLogado(false)


        })()
    },[])
    
    if(!logado){
        return <Navigate to="/login"/>
    }

    return children
}

  
