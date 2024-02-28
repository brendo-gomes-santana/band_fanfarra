import React from 'react'
import { useForm } from 'react-hook-form';
import { FaUsersCog } from "react-icons/fa";

import { Main, Painel } from './styled';

export default function Login() {

  const { register, handleSubmit } = useForm();


  function handleLogin(data){
    console.log(data);
  }

  
  return (
    <Main>
        <FaUsersCog size={100} color='#F4A50B'/>
        <Painel onSubmit={handleSubmit(handleLogin)}>
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
