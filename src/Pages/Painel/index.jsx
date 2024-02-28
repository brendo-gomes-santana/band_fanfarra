import React from 'react'
import { MdOutlineSettings } from "react-icons/md";

import Header from '../../Components/Header';
import { Main, Titulo } from './styled';

export default function Painel() {
  return (
    <>
      <Header />
      <Main>
        <Titulo>
          <MdOutlineSettings />
          <h1>Configuração</h1>
        </Titulo>
      </Main>
    </>
  )
}
