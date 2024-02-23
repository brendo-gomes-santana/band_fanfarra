import { FaDrum } from "react-icons/fa6";

import Comunicacao from "../../Components/Comunicacao";
import Header from "../../Components/Header";

import Logo from '../../Image/logo.png';
import Logo_colegio from '../../Image/logo-colegio.png';
import banda_tocando from '../../Image/banda-tocando.png'
import { Capa, Instrutores, Logos, Projeto } from "./styled";

export default function Home() {

    const instagram_igor = "https://www.instagram.com/igor_moraesx?igsh=Mzk4cDRoaGYyZGdy";
    const instagram_welem = "https://www.instagram.com/welemsilva09?igsh=cjkycDM0M3lsMzJx";

    return (
        <>
            <Header />
            <Capa>
                <h1>BANDA MARCIAL PROFª FRANCISCA PEREIRA DE ARAÚJO</h1>
                <Instrutores>
                    <p>Instrutor: Welem Silva</p>
                    <p>Instrutor Auxiliar: Igor Moras</p>
                </Instrutores>
                <Logos>
                    <div>
                        <img src={Logo} alt="logo-da-banda" />
                        <p>Fundação: 15/02/2019</p>
                    </div>
                    <img src={Logo_colegio} alt="logo-colegio" />
                </Logos>
            </Capa>
            <Projeto>
                <img src={banda_tocando} alt="banda-tocando" />
                <article>
                    <h2>
                        <FaDrum /> Projeto
                    </h2>
                    <p>O projeto BAMFPA 2023, Deu início no dia 11/06/2023. Com a Chegada dos 
                        instrutores <a href={instagram_welem} target="blank">Welem Silva</a> e <a href={instagram_igor} target="blank">Igor Moraes</a>. Executaram um trabalho maravilhoso durante 5 meses de 
                        projeto. Tendo encerramento no dia 11/12/2023 ( Último Ensaio Do Ano ).</p>
                </article>
            </Projeto>
            <Comunicacao />
        </>
    )
}