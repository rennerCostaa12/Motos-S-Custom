import styled from "styled-components";

export const ContainerForm = styled.div`
    width: 100%;
    height: 105vh;
    display: grid;
    place-items: center;
    background-image: url('https://mobilidade.estadao.com.br/wp-content/uploads/2019/11/acess%C3%B3rios-para-proteger-moto.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
export const ContentForm = styled.div`
    width: 750px;
    position: relative;

    > button {
        color: #A20D00;
    }

    animation-name: fadeIn;
    animation-duration: 1s;

    @keyframes fadeIn {
        from{
            opacity: 0;
        }

        to{
            opacity: 1;
        }
    }
    
    @media(max-width: 768px){
        width: 80%;
        margin: 0.5rem;
    }

    @media(max-width: 425px){
        width: 100%;
    }
`
export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    background-color: #ffff;
    padding: 2rem 2rem;
    border-radius: 5px;
    border: 1px solid #A20D00;

    h1{
        text-align: center;
        margin-bottom: 0.5rem;
        color: #A20D00;
    }
`

export const ContentRowInput = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;

    >div{
        width: 50%;
    }
`

export const ContentButtonForm = styled.div`
    text-align: center;
`
