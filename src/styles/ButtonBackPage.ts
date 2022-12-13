import styled from "styled-components";

export const ContentButton = styled.button`
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0%;
    color: #f1f1f1;
    font-size: 40px;
    margin: 1.5rem;
    cursor: pointer;
    background: none;
    border: none;

    :hover{
        transition: all ease 0.3s;
        color: #A20D00;
    }

    @media(max-width: 425px){
        font-size: 23px;
        margin: 1rem;
    }
`