import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    gap: 20px;
    
    @media(max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`

export const ContentForm = styled.div`
    width: 50%;
    padding: 2rem;

    @media(max-width: 768px){
        width: 100%;
    }
    
`

export const ImageLogo = styled.img`
    width: 250px;
    display: block;
    margin: auto;

    @media(max-width: 768px){
        width: 120px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;

    > div {
        text-align: center;
    }

    > span{
        display: block;
        text-align: center;
        margin: 1rem 0;
        font-size: 18px;

        > a{
            text-decoration: none;
            font-weight: bold;
            color: #A20D00;
        }
    }
`

export const Inputs = styled.input`
    padding: 0.8rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #808080;

    :focus{
        transition: all ease 0.3s;
        border-bottom: 1px solid #A20D00;
    }
`

export const ImageBanner = styled.div`
    width: 50%;
    height: 150vh;
    background: url('https://valente.blog.br/wp-content/uploads/2021/06/moto_custom-scaled.jpg');
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;

    @media(max-width: 768px){
        width: 100%;
        height: 70vh;
    }
`