import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Container, Form, Cep_N } from "./styled";
import Header from "../../Components/Header";

export default function Fale_conosco() {

    const { register } = useForm()

    const [cep, setCep] = useState("");
    useEffect(() => {

        (async() =>{
            
        })()

    },[cep])


    return (
        <>
            <Header />
            <Container>
                <Form>
                    <input 
                        type="text" 
                        placeholder="Nome completo" 
                        {...register('Nome')}/>
                    <input 
                        type="text" 
                        placeholder="Numero de contato" 
                        {...register('contato')}/>
                    <input 
                        type="text" 
                        placeholder="segundo numero de contato (opcional)" 
                        {...register("contato_2")}/>
                    <Cep_N>
                        <input 
                            type="text" 
                            placeholder="Cep" 
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
                        {...register('Eatado')}
                        />
                    <select>
                        <optgroup label="SOPRO">
                            <option value="SOPRO">SOPRO</option>
                            <option value="Euphonio">Euphonio</option>
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