import styled from "styled-components";

export const Main = styled.section`
    
    padding: 1em;

    display: flex;
    flex-wrap: wrap;
`;

export const Titulo = styled.section`
    display: flex;
    align-items: center;
    padding: 10em 1em 0 1em;
    h1, svg{
        color: #F4A50B;
        font-size: 3em;
    }
`;

export const Informacoes = styled.article`

    width: 100%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 720px;
    margin-bottom: 2em;

    input, textarea{
        padding: 1em;
        margin-bottom: 0.5em;
        border: 1px solid #F4A50B;
        outline: none;
        border-radius: 13px;
    }

    textarea{
        resize: none;
    }
    

    button{
        height: 50px;

        width: 20em;
        align-self: self-end;

        border: none;
        border-radius: 13px;
        font-weight: bold;

        background-color: #8db989;
        color: #fff;
        cursor: pointer;
    }
`;

export const Novidade = styled.div`
    background-color: #ddd;
    width: 100%;
    max-width: 720px;

    display: flex;
    align-items: center;
    
    margin-bottom: 1em;
    padding: 0.5em;
    border-radius: 13px;
    

    p{
        &:first-child{
            margin-right: 0.5em;
        }
    }
`;
