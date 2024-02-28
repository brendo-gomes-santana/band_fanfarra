import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../Contexts";

export default function Logado({children}) {

    const { logado, carregando } = useContext(AuthContext)

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

  
