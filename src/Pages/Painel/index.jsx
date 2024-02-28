import React, { useState, useEffect } from 'react'
import { MdOutlineSettings } from "react-icons/md";
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { RiDeleteBin6Fill } from "react-icons/ri";

import { db } from '../../Service';
import Header from '../../Components/Header';
import Navegacao from '../../Components/Navegacao';

import { Form, Informacoes, Main, Titulo, Novidade } from './styled';


const ListaRefNovidades = collection(db, "novidades");

export default function Painel() {

  const [selecionado, setSelecionado] = useState(0);
  const [novidades, setNovidades] = useState([]);

  const {
    register: registrarNovidade,
    handleSubmit: handleSubmitNovidade,
    reset: limparNovidade } = useForm();

  async function handleCadastrarNovidade(data) {

    try {
     const value = await addDoc(collection(db, "novidades"), data)

      const retorno = {
        id: value.id,
        data: data.data,
        descricao: data.descricao
      }
      
      setNovidades([...novidades, retorno])

      limparNovidade()
    } catch (err) {
      console.error(err)
    }
  }

  async function handleDeletarNovidade(id){
    const docRef = doc(db, "novidades", id)
    try{
      await deleteDoc(docRef)

      const retorno = novidades.filter(item => {
        return item.id !== id
      })
      setNovidades(retorno)
      alert("deletado")
    }catch(err){
      console.log(err)
    }

  }
  
  useEffect(() => {
    (async () => {
      await getDocs(ListaRefNovidades)
        .then((snapshot) => {
          let lista = [];
          snapshot.forEach((doc) => {
            lista.push({
              id: doc.id,
              data: doc.data().data,
              descricao: doc.data().descricao
            })
          })

          setNovidades(lista)
        })
        .catch((err) => {
          console.log(err)
        })
    })()
  }, [])
  function conversoDeData(data){
    const dia = new Date(data).getDate() + 1
    const mes = new Date(data).getMonth() + 1

    return `${dia}/${mes}`
  }
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
            <Form onSubmit={handleSubmitNovidade(handleCadastrarNovidade)}>
              <input
                type="date"
                {...registrarNovidade('data')} />
              <textarea
                type="date"
                {...registrarNovidade("descricao")} />
              <button type='submit'>Cadastrar novidade</button>
            </Form>
            {novidades.length === 0 && (
              <p>Não possui nem uma novidade cadastrada no momento.</p>
            )}
            {novidades?.map((item) => {
              return (
                <Novidade key={item.id}>
                  <p>{conversoDeData(item.data)}</p>
                  <p>{item.descricao}</p>
                  <button onClick={() => handleDeletarNovidade(item.id)}>
                    <RiDeleteBin6Fill size={25} />
                  </button>
                </Novidade>
              )
            })}
          </Informacoes>
        )}
      </Main>
    </>
  )
}
