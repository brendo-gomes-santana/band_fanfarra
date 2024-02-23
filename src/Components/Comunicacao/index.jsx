import whatsApp from '../../Image/whatsApp.png';
import Instagram from '../../Image/Instagram.png';

import { Main } from './styled'

export default function Comunicacao(){
    return(
        <Main>
            <a href='https://api.whatsapp.com/send/?phone=55092999781046&text&type=phone_number&app_absent=0' target='blank'>
                <img src={whatsApp} alt="logo-whatsApp" />
            </a>
            <a href='https://www.instagram.com/bamfpa_/' target='blank'>
                <img src={Instagram} alt="logo-Instagram" />
            </a>
        </Main>
    )
}