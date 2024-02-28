import styled from "styled-components";

export const Main = styled.header`
    position: fixed;
    top: 0;
    
    width: 100%;

    background-color: #004aad;
    box-shadow: 2em 0.5em 1em #F4A50B;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    z-index: 1000;
    img{
        width: 6em;
    }

`;

export const Navegador = styled.nav`
    padding: 0 1em;
    display: flex;
    align-items: center;
    a{
        font-size: 18px;
        color: #fff;
        margin: 0 0.5em;
    }

    svg{
        font-size: 2em;
    }
`;