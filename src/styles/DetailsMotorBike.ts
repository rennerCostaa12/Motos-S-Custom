import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`

export const ContentButtonBack = styled.button`
    position: absolute;
    z-index: 10;
    top: 0%;
    color: #f1f1f1;
    font-size: 40px;
    padding: 1rem;
    cursor: pointer;
    background: none;
    border: none;

    :hover{
        transition: all ease 0.3s;
        color: #A20D00;
    }
`

export const ContentBanner = styled.img`
    width: 100%;
    height: 95vh;
    filter: brightness(30%);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const ContentDescriptionBanner = styled.div`
    width: 100%;
    position: absolute;
    top: 30%;
    text-align: center;
    color: #f1f1f1;
    padding: 0 3rem;

    @media(max-width: 768px){
        padding: 0 1rem;
    }
`

export const TitleMotorbike = styled.h1`
    font-size: 55px;
    margin-bottom: 1rem;
    
    @media(max-width: 768px){
        font-size: 35px;
    }
    @media(max-width: 500px){
        font-size: 25px;
    }
`

export const DescriptionMotorbike = styled.p`
    line-height: 30px;
    @media(max-width: 768px){
        font-size: 14px;
        line-height: 25px;
    }

    @media(max-width: 500px){
        font-size: 12px;
        line-height: 20px;
    }
`

export const SalesAreaMotorbike = styled.section`
    margin: 2rem 0;
    width: 100%;
    gap: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 3rem;

    > img{
        width: 50%;
        border: 3px solid #A20D00;
        border-radius: 5px;
        transform: scale(0.9);

        :hover{
            transition: all ease 0.3s;
            transform: scale(1);
        }
    }

    @media(max-width: 500px){
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 10px;

        > img{
            width: 300px;
        }
    }
`

export const FeatureMotorbike = styled.div`
    > span{
        display: block;
        font-size: 20px;
        margin: 0.5rem;
    }

    @media(max-width: 500px){
        > span{
        font-size: 16px;
        }
    }
`

export const PriceMotorbike = styled.span`
    font-size: 50px !important;
    font-weight: bold;
    color: #A20D00;
    margin: 2rem 0;

    @media(max-width: 500px){
        font-size: 35px !important;
    }
`
