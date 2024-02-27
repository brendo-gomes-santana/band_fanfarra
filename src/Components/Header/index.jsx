import { Link } from 'react-router-dom';

import Logo from '../../Image/logo.png'

import { Main, Navegador } from './styled'

export default function Header(){
    return(
        <Main>
            <img src={Logo} alt='Logo-da-banda'/>
            <Navegador>
                <Link to="/">Home</Link>
                <Link to="/patrocinio">Patrocinadores</Link>
            </Navegador>
        </Main>
    )
}