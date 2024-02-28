import React, { useEffect } from 'react'
import AOS from 'aos';

import { useForm } from 'react-hook-form';
import { FaUsersCog } from "react-icons/fa";
import ensaio from '../../Image/Ensaio-da-banda.png';

import { Main, Painel } from './styled';

export default function Login() {

  const { register, handleSubmit } = useForm();


  function handleLogin(data){
    console.log(data);
  }

  useEffect(() => {
    AOS.init()
  },[])
  
  return (
    <Main>
        <img src={ensaio} alt="Ensaio da banda" data-aos="fade-right"/>
        <Painel onSubmit={handleSubmit(handleLogin)} data-aos="fade-down">
            <FaUsersCog size={100} color='#F4A50B'/>
            <input 
              type="text" 
              placeholder='Informe o email'
              {...register('email')}/>
            <input 
              type="text" 
              placeholder='Informe a senha'
              {...register('password')}/>
            <button>Logar</button>
        </Painel>
    </Main>
  )
}
