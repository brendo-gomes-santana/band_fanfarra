import React, { useState } from 'react'
import { MdOutlineSettings } from "react-icons/md";

import Header from '../../Components/Header';
import Navegacao from '../../Components/Navegacao';

import { Form, Informacoes, Main, Titulo, Novidade } from './styled';

export default function Painel() {

  const [selecionado, setSelecionado] = useState(0);

  return (
    <>
      <Header />
      <Titulo>
        <MdOutlineSettings />
        <h1>Configuração</h1>
      </Titulo>
      <Main>
        <Navegacao selecao={setSelecionado} />
        {selecionado === 1 && (
          <Informacoes>
              <Form>
                <input type="date" />
                <textarea type="date" />
                <button>Cadastrar novidade</button>
              </Form>

              <Novidade>
                <p>19/02</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                  a type specimen book.</p>
              </Novidade>
              <Novidade>
                <p>19/02</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                  a type specimen book.</p>
              </Novidade>
              <Novidade>
                <p>19/02</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                  a type specimen book.</p>
              </Novidade>
          </Informacoes>
        )}
      </Main>
    </>
  )
}
