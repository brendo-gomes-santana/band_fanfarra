import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'; 
import AOS from 'aos';

import { useForm } from 'react-hook-form';
import { FaUsersCog } from "react-icons/fa";

import { AuthContext } from '../../Contexts';
import ensaio from '../../Image/Ensaio-da-banda.png';

import { Main, Painel } from './styled';

export default function Login() {

  const { register, handleSubmit } = useForm();
  const { logar } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogin(data) {
    logar(data)
  }
  
  useEffect(()=>{
    (async () => {
      const user = JSON.parse(localStorage.getItem('@user'))
      
      if (user) {
        navigate("/painel")
        return;
      }
      
    })()
  },[navigate])
  
    useEffect(() => {
      AOS.init()
    }, [])

  return (
    <Main>
      <img src={ensaio} alt="Ensaio da banda" data-aos="fade-right" />
      <Painel onSubmit={handleSubmit(handleLogin)} data-aos="fade-down">
        <FaUsersCog size={100} color='#F4A50B' />
        <input
          type="text"
          placeholder='Informe o email'
          {...register('email')} />
        <input
          type="password"
          placeholder='Informe a senha'
          {...register('password')} />
        <button>Logar</button>
      </Painel>
    </Main>
  )
}
