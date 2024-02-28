import styled from "styled-components";


export const Main = styled.article`

    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;

    button{
        font-size: 18px;
        text-align: start;
        border: none;
        background: transparent;
        cursor: pointer;
        padding: 0.2em;

        margin-bottom: 0.5em;

        transition: 0.5s;
        border-radius: 13px;
        &:hover{
            background-color: #F4A50B;
        }
    }
`;
