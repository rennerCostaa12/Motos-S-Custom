import styled from "styled-components";

export const ContentCard = styled.div`
    position: relative;
    width: 350px;
    border-radius: 8px;
    border: 2px solid #ffffff00;
    background-color: #ffff;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    
    :hover{
        transition: all ease 0.1s;
        border: 2px solid #A20D00;
    }
    
    @media(max-width: 425px){
        width: 300px;
    }
`

export const ImageCard = styled.img`
    width: 100%;
    height: 250px;
    border-radius: 8px;
`

export const TitleCard = styled.h1`
    font-size: 20px;
    padding-left: 0.8rem;
    margin-bottom: 0.5rem;
`

export const DescriptionCard = styled.span`
font-size: 18px;
    color: #808080;
    padding-left: 0.8rem;
`

export const ContentButtonDetails = styled.div`
    text-align: center;

    a{
        color: #f1f1f1;
        text-decoration: none;
        font-size: 14px;
        font-weight: bold;
        border-radius: 8px;
        background-color: #A20D00;
        padding: 0.7rem;
        transition: all ease 0.3s;
        
        :hover{
            background-color: #740b01;
        }
    }
`