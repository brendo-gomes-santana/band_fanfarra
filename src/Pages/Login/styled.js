import styled from "styled-components";

export const Main = styled.section`

    height: 100%;

    display: flex;
    background-color: #004aad;
    img{
        min-height: 100vh;
        height: 50vh;
        width: 100%;
        max-width: 50%;
        box-shadow: 0 1px 3em #000;
        z-index: 100;
        border-radius: 0 5em 5em 0;
    }
`;
export const Painel = styled.form`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
    background-color: #004aad;

    width: 100%;
    max-height: 50%;
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