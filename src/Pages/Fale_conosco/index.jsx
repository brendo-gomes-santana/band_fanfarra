import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask'
import emailjs from '@emailjs/browser';

import { Container, Form, Cep_N } from "./styled";
import Header from "../../Components/Header";
import axios from 'axios'

export default function Fale_conosco() {

    const { register, setValue, handleSubmit } = useForm()

    const [cep, setCep] = useState("");
    
    useEffect(() => {
        (async() =>{
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((r) => {
                setValue('rua', r.data.logradouro)
                setValue('cidade', r.data.localidade)
                setValue('estado', r.data.uf)
                setValue('bairro', r.data.bairro)
            })
            .catch(error => {
                console.log(error)
            })
        })()

    },[cep])


    async function handleEnviarForm(data){
        emailjs.send('service_vd7pa89', 'template_h67knkh', data, 'wlDslkZKwlcecTwVf')
        .then((r) => {
            console.log(r)
            alert('Enviada com sucesso')
        })
        .catch((error) => {
            console.error(error)
            alert('Algo deu errado')
        })
    }

    return (
        <>
            <Header />
            <Container>
                <h1>Fale conosco</h1>
                <Form onSubmit={handleSubmit(handleEnviarForm)}>
                    <input 
                        type="text" 
                        placeholder="Nome completo" 
                        {...register('nome')}/>
                    <input 
                        type="text" 
                        placeholder="Email" 
                        {...register('email')}/>
                    <InputMask 
                        type="text"
                        mask="(99) 9 9999-9999" 
                        placeholder="Numero de contato" 
                        {...register('contato')}/>
                    <InputMask 
                        type="text" 
                        mask="(99) 9 9999-9999" 
                        placeholder="segundo numero de contato (opcional)" 
                        {...register("contato_2")}/>
                    <Cep_N>
                        <InputMask 
                            type="text" 
                            placeholder="Cep"
                            mask="99999-999" 
                            value={cep} 
                            onChange={ v => setCep(v.target.value)}
                            />
                        <input 
                            type="text" 
                            placeholder="N° da casa" 
                            {...register('n_da_casa')}
                            />
                    </Cep_N>
                    <input 
                        type="text" 
                        placeholder="Rua" 
                        {...register('rua')}
                        />
                    <input 
                        type="text" 
                        placeholder="Cidade" 
                        {...register('cidade')}
                        />
                    <input 
                        type="text" 
                        placeholder="Estado" 
                        {...register('estado')}
                        />
                    <input 
                        type="text" 
                        placeholder="Bairro" 
                        {...register('bairro')}
                        />
                    <select {...register('instrumento')}>
                        <option value="">Selecione o instrumento que gostária de tocar</option>
                        <optgroup label="SOPRO">
                            <option value="SOPRO">SOPRO</option>
                            <option value="Euphonium">Euphonium</option>
                            <option value="Trompete">Trompete</option>
                            <option value="Trompa">Trompa</option>
                            <option value="Trobonito">Trobonito</option>
                            <option value="Tuba">Tuba</option>
                        </optgroup>
                        <optgroup label="Percussão">
                            <option value="Percussão">Percussão</option>
                            <option value="Bumbo">Bumbo</option>
                            <option value="Caixa">Caixa</option>
                            <option value="Prato">Prato</option>
                            <option value="Atabaque">Atabaque</option>
                            <option value="Tumbadora">Tumbadora</option>
                            <option value="Tenor(quinton)">Tenor (quinton)</option>
                        </optgroup>
                    </select>
                    <button>ENVIAR</button>
                </Form>
            </Container>
        </>
    )
}