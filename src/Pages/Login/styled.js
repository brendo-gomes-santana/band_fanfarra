import styled from "styled-components";

export const Main = styled.section`

    height: 100%;

    display: flex;
    background-color: #004aad;
    min-height: 100vh;
    flex-wrap: wrap-reverse;
    img{
        max-height: 100vh;
        min-height: 40vh;
        width: 100%;
        max-width: 720px;
        box-shadow: 0 1px 3em #000;
        z-index: 100;
        border-radius: 0 5em 5em 0;
    }

    @media (max-width: 1426px){

        padding: 1em;
        justify-content: center;
        img{
            border-radius: 20px;
            
        }
    }
`;
export const Painel = styled.form`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
    background-color: #004aad;

    width: 100%;
    max-width: 720px;
    input, button{
        width: 85%;
        height: 3em;
        border-radius: 20px;
        border: none;
        outline: none;
        font-size: 1em;
        padding: 0 1em;
        margin-bottom: 1em;
    }

    button{
        cursor: pointer;
    }

`;