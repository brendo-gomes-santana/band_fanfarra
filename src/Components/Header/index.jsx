import { Link } from 'react-router-dom';
import { FaUsersGear } from "react-icons/fa6";
import Logo from '../../Image/logo.png'

import { Main, Navegador } from './styled'

export default function Header(){
    return(
        <Main>
            <img src={Logo} alt='Logo-da-banda'/>
            <Navegador>
                <Link to="/">Home</Link>
                <Link to="/patrocinio">Patrocinadores</Link>
                <Link to="/login">
                    <FaUsersGear/>
                </Link>
            </Navegador>
        </Main>
    )
}