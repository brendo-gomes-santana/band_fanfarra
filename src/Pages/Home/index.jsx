import { useEffect } from "react";
import AOS from "aos"; 
import { FaDrum } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { GiDrum } from "react-icons/gi";

import Comunicacao from "../../Components/Comunicacao";
import Header from "../../Components/Header";
import Mapa from "../../Components/Mapa";

import Logo from '../../Image/logo.png';
import Logo_colegio from '../../Image/logo-colegio.png';
import banda_tocando from '../../Image/banda-tocando.png';
import ensaio_da_banda from '../../Image/Ensaio-da-banda.png';
import desfile_escolar from '../../Image/desfile-escolar.png'
import banda_completa from '../../Image/banda-completa.png';
import musico_musico from '../../Image/logo-musico.jpg';
import logo_vila_da_barra from '../../Image/logo-vila-da-barra.png';

import 'aos/dist/aos.css';

import { BaseCard, Capa, Card, Instrutores, Logos, Projeto, Release,Gestora, Instituicao, Novidades, Evento, Localizacao } from "./styled";

export default function Home() {

    const instagram_igor = "https://www.instagram.com/igor_moraesx?igsh=Mzk4cDRoaGYyZGdy";
    const instagram_welem = "https://www.instagram.com/welemsilva09?igsh=cjkycDM0M3lsMzJx";

    useEffect(() => {
        AOS.init()
    },[])

    return (
        <>
            <Header />
            <Capa>
                <h1 
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                    >BANDA MARCIAL PROFª FRANCISCA PEREIRA DE ARAÚJO</h1>
                <Instrutores
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                >
                    <p>Instrutor: Welem Silva</p>
                    <p>Instrutor Auxiliar: Igor Moras</p>
                </Instrutores>
                <Logos
                    data-aos="fade-up"
                    data-aos-duration="4000"
                >
                    <div>
                        <img src={Logo} alt="logo-da-banda" />
                        <p>Fundação: 15/02/2019</p>
                    </div>
                    <img src={Logo_colegio} alt="logo-colegio" />
                </Logos>
            </Capa>
            <Projeto>
                <img 
                    src={banda_tocando} alt="banda-tocando"
                    data-aos="fade-right"/>
                <article>
                    <h2
                        data-aos="fade-down"
                        
                    >
                        <FaDrum /> Projeto
                    </h2>
                    <p data-aos="fade-up">O projeto BAMFPA 2023, Deu início no dia 11/06/2023. Com a Chegada dos 
                        instrutores <a href={instagram_welem} target="blank">Welem Silva</a> e <a href={instagram_igor} target="blank">Igor Moraes</a>. Executaram um trabalho maravilhoso durante 5 meses de 
                        projeto. Tendo encerramento no dia 11/12/2023 ( Último Ensaio Do Ano ).</p>
                </article>
            </Projeto>
            <Release>
                <h3 data-aos="fade-up">Release</h3>
                <BaseCard>
                    <Card data-aos="fade-up" data-aos-duration="1000">
                        <img src={ensaio_da_banda} alt="ensaio_da_banda" />
                        <figcaption>
                            <strong>ENSAIO</strong>
                            Ensaio do Nipe de Sopro dirigindo pelo <a href={instagram_welem} target="blank"> instrutor Welem Silva</a>
                        </figcaption>
                    </Card>
                    <Card data-aos="fade-up" data-aos-duration="1500">
                        <img src={desfile_escolar} alt="desfile_escolar" />
                        <figcaption>
                            <strong>DESFILE ESCOLAR</strong>
                            Desfile escolar 2023 no dia 04/09/2023. Deu-se início às 07h30
                            com término às 09h00 na <a href="https://g.co/kgs/YL3BKQX" target="blank">Escola Municipal Olavo Bilac</a> no Parque das Nações.
                        </figcaption>
                    </Card>
                    <Card data-aos="fade-up" data-aos-duration="2000">
                        <img src={banda_completa} alt="banda-completa" />
                        <figcaption>
                            <strong>1° APRESENTAÇÃO 2023</strong>
                            Apresentação Oficial deu-se início nos Jogos Escolares Internos DDZ-SUL / SEMED.
                        </figcaption>
                    </Card>
                </BaseCard>
            </Release>
            <Gestora data-aos="fade-up" data-aos-duration="2000">
                <p>Alice Cristina de Olveira Bozetto</p>
                <p>Gestora escolar</p>
            </Gestora>
            <Instituicao>
                <h4 data-aos="fade-up" data-aos-duration="1000">
                    <GiDrum/> INSTITUIÇÃO <GiDrum/>
                </h4>
                <figure data-aos="fade-up" data-aos-duration="1500">
                    <img src={logo_vila_da_barra} alt="logo-vila-da-barra"/>
                    <img src={musico_musico} alt="logo-musico"/>
                </figure>
                <article data-aos="fade-up" data-aos-duration="2000">
                    <p>
                        <strong>BAMFPA</strong>
                    </p>
                    <p>
                    Oficialmente somos gerenciados pelo Instituto Musical Vila Da Barra através do projeto “Educando Com Música” 
                    desde 2022. Pertence ao Distrital De Zona - SUL Da Secretaria Municipal De Educação - SEMED  
                    </p>
                </article>
            </Instituicao>
            <Novidades>
                <article>
                    <h5 data-aos="fade-up">NOVIDADES</h5>
                    <Evento data-aos="fade-up" data-aos-duration="2000">
                        <div>
                            <p>21/02</p>
                        </div>
                        <div>
                            <p>Lançamento do chamado para o ano letivo da banda marcial em 2024.</p>
                        </div>
                    </Evento>
                    <Evento data-aos="fade-up" data-aos-duration="2000">
                        <div>
                            <p>21/02</p>
                        </div>
                        <div>
                            <p>Lançamento do chamado para o ano letivo da banda marcial em 2024.</p>
                        </div>
                    </Evento>
                    <Evento data-aos="fade-up" data-aos-duration="2000">
                        <div>
                            <p>21/02</p>
                        </div>
                        <div>
                            <p>Lançamento do chamado para o ano letivo da banda marcial em 2024.</p>
                        </div>
                    </Evento>
                </article>
                <article data-aos="fade-up">
                    <img src={require('../../Image/todos-juntos.jpg')} alt="todos-juntos" />
                </article>
            </Novidades>
            <Comunicacao />
            <Localizacao>
                    <h6 data-aos="fade-up">
                       <IoLocationSharp/> Localição
                    </h6>
                    <figure data-aos="fade-right">
                        <Mapa/>
                        <figcaption data-aos="fade-up">
                            <strong>Enderenço: </strong>
                            R. Padre Monteiro de Noronha, 285 - Flores, Manaus - AM, 69028-242
                        </figcaption>
                    </figure>
            </Localizacao>
        </>
    )
}