import styled from "styled-components";

export const Main = styled.section`

    height: 100%;
    min-height: 95.35vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: #004aad;
    padding: 1em;
`;
export const Painel = styled.form`
    display: flex;
    flex-direction: column;
    
    border: 2px solid #F4A50B;
    box-shadow: 3px 3px 10px #000;
    
    border-radius: 20px;
    padding: 1em;

    width: 100%;
    max-width: 720px;


    input, button{
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