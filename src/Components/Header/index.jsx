import Logo from '../../Image/logo.png'

import { Main } from './styled'

export default function Header(){
    return(
        <Main>
            <img src={Logo} alt='Logo-da-banda'/>
        </Main>
    )
}