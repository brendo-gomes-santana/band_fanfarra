import { FaDrum } from "react-icons/fa6";

import Comunicacao from "../../Components/Comunicacao";
import Header from "../../Components/Header";

import Logo from '../../Image/logo.png';
import Logo_colegio from '../../Image/logo-colegio.png';
import banda_tocando from '../../Image/banda-tocando.png';
import ensaio_da_banda from '../../Image/Ensaio-da-banda.png';
import desfile_escolar from '../../Image/desfile-escolar.png'
import banda_completa from '../../Image/banda-completa.png';
import musico_musico from '../../Image/logo-musico.jpg';
import logo_vila_da_barra from '../../Image/logo-vila-da-barra.png';

import { BaseCard, Capa, Card, Instrutores, Logos, Projeto, Release,Gestora, Instituicao, Novidades, Evento } from "./styled";

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
            <Release>
                <h3>Release</h3>
                <BaseCard>
                    <Card>
                        <img src={ensaio_da_banda} alt="ensaio_da_banda" />
                        <figcaption>
                            <strong>ENSAIO</strong>
                            Ensaio do Nipe de Sopro dirigindo pelo <a href={instagram_welem} target="blank"> instrutor Welem Silva</a>
                        </figcaption>
                    </Card>
                    <Card>
                        <img src={desfile_escolar} alt="desfile_escolar" />
                        <figcaption>
                            <strong>DESFILE ESCOLAR</strong>
                            Desfile escolar 2023 no dia 04/09/2023. Deu-se início às 07h30
                            com término às 09h00 na <a href="https://g.co/kgs/YL3BKQX" target="blank">Escola Municipal Olavo Bilac</a> no Parque das Nações.
                        </figcaption>
                    </Card>
                    <Card>
                        <img src={banda_completa} alt="banda-completa" />
                        <figcaption>
                            <strong>1° APRESENTAÇÃO 2023</strong>
                            Apresentação Oficial deu-se início nos Jogos Escolares Internos DDZ-SUL / SEMED.
                        </figcaption>
                    </Card>
                </BaseCard>
            </Release>
            <Gestora>
                <p>Alice Cristina de Olveira Bozetto</p>
                <p>Gestora escolar</p>
            </Gestora>
            <Instituicao>
                <h4>INSTITUIÇÃO</h4>
                <figure>
                    <img src={logo_vila_da_barra} alt="logo-vila-da-barra"/>
                    <img src={musico_musico} alt="logo-musico"/>
                </figure>
                <article>
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
                    <h5>NOVIDADES</h5>
                    <Evento>
                        <div>
                            <p>21/02</p>
                        </div>
                        <div>
                            <p>Lançamento do chamado para o ano letivo da banda marcial em 2024.</p>
                        </div>
                    </Evento>
                    <Evento>
                        <div>
                            <p>21/02</p>
                        </div>
                        <div>
                            <p>Lançamento do chamado para o ano letivo da banda marcial em 2024.</p>
                        </div>
                    </Evento>
                    <Evento>
                        <div>
                            <p>21/02</p>
                        </div>
                        <div>
                            <p>Lançamento do chamado para o ano letivo da banda marcial em 2024.</p>
                        </div>
                    </Evento>
                </article>
                <article>
                    <img src={require('../../Image/todos-juntos.jpg')} alt="todos-juntos" />
                    <video width="300" height="500" controls> 
                        <source src={require('../../Image/2024-vindo.mp4')}/>
                    </video>
                </article>
            </Novidades>
            <Comunicacao />
        </>
    )
}