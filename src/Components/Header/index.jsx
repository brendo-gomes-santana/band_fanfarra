import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { FaUsersGear } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";

import Logo from '../../Image/logo.png'
import { AuthContext } from '../../Contexts';

import { Main, Navegador } from './styled'

export default function Header() {

    const { logado, deslogar } = useContext(AuthContext)

    return (
        <Main>
            <img src={Logo} alt='Logo-da-banda' />
            <Navegador>
                <Link to="/">Home</Link>
                <Link to="/patrocinio">Patrocinadores</Link>

                {logado ? (
                    <Link to="/painel">Configuração</Link>
                ) : (
                    <Link to="/login">
                        <FaUsersGear />
                    </Link>
                )}

                {logado && (
                    <button onClick={deslogar}>
                        <MdOutlineLogout />
                    </button>
                )}
            </Navegador>
        </Main>
    )
}