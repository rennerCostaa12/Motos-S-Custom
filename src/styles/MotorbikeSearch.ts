import styled from "styled-components";

export const Container = styled.div`
    margin: 4rem 0;
`

export const Content = styled.div`

    /* BUTTON BACK PAGE HOME */
    > button{
        color: #A20D00;
    }

    >span{
        display: block;
        text-align: center;
        margin: 2.5rem 1rem;
        font-size: 2rem;
    }
`

export const ContentCards = styled.div`
    display: flex;
    justify-content: center;
    gap: 35px;
    flex-wrap: wrap;
    margin: 3rem 0;
`

export const ContentSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    > span{
        font-size: 2rem;
    }

    @media(max-width: 425px){  
        > span{
            font-size: 1rem;
        }
    }
`