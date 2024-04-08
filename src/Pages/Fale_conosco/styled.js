import styled from 'styled-components';

export const Container = styled.main`
    padding-top: 10em;

    width: 100%;
    min-height: 85vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Form = styled.form`
    margin: 1em;

    background-color: #F4A50B;

    width: 100%;
    max-width: 720px;

    display: flex;
    flex-direction: column;
    padding: 2em 5em;
    border-radius: 10em 13px 10em 13px;

    input, select, button{
        margin-bottom: 0.5em;
        height: 7vh;
        padding: 0 0.5em;
        font-size: 13px;
        border: none;
        border-radius: 13px;
        outline: none;
    }

    button{
        cursor: pointer;
    }

    transition: 1s;
    &:hover{
        border-radius: 13px 10em 13px 10em;
    }
`;

export const Cep_N = styled.div`
    display: flex;
    input{
        width: 50%;
        &:first-child{
            margin-right: 0.5em;
        }
        &:last-child{
            margin-left: 0.5em;
        }
    }
`;