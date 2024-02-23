import styled  from "styled-components";

export const Capa = styled.section`
    padding: 7em 1em 0 1em;
    h1{
        width: 90%;
        font-size: 80px;
        margin: 0 auto;
        text-align: center;
        line-height: 1em;
        
    }
`;
export const Instrutores = styled.article`
    display: flex;
    justify-content: space-around;
    
    p{
        font-size: 25px;
        font-family: "Sacramento";
    }
`;

export const Logos = styled.article`
    display: flex;
    justify-content: space-around;
    padding-top: 2em;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 25em;
            height: 20em;
        }
        p{
            font-size: 20px;
            font-family: "Sacramento";
        }
    }

    img{
        width: 22em;
        height: 20em;
    }
`;

export const Projeto = styled.section`
    padding: 1em 5em;
    display: flex;
    
    img{
        width: 35em;
        height: 30em;
        border-radius: 20px;
        box-shadow: 0.5em 0.5em 1em #F4A50B;
        transition: 0.5s;

        &:hover{
            transform: scale(1.03);
            box-shadow: 1em 1em 1em #F4A50B;

        }
    }

    article{
        margin-left: 2em;

        h2{
            font-size: 5em;
            color: #F4A50B;
            font-style: italic;
        }

        p{
            font-size: 1.5em;
        }
        a{
            font-weight: bold;
        }
    
    }
`;
export const Release = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
        font-size: 5em;
        font-style: italic;
        position: relative;
        color: #F4A50B;
        &::after{
            content: " ";
            width: 100px;
            height: 2px;
            background-color: #F4A50B;
            position: absolute;
            top: 60%;
            right: -100px;
            transform: translateY(-50%);
        }

        &::before{
            content: " ";
            width: 100px;
            height: 2px;
            background-color: #F4A50B;
            position: absolute;
            top: 60%;
            transform: translateY(-50%);
            left: -100px;
        }
    }

`;
export const BaseCard = styled.article`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`;

export const Card = styled.figure`
    width: 100%;
    max-width: 26em;

    img{
        width: 100%;
        border-radius: 20px;
    }

    figcaption{

        display: flex;
        flex-direction: column;

        text-align: center;
        font-size: 20px;
        strong{
            color: #F4A50B;
            font-size: 25px;
        }

        a{
            font-weight: bold;
        }
    }
`;