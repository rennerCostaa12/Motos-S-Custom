import styled from "styled-components";

export const ContainerFinalizePurchase = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    background-color: #ffff;
    padding: 2rem;
    border-radius: 8px;

    /* BUTTON BACK PAGE HOME */
    > div:nth-child(1) > button{
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

    @media(max-width: 800px){
        flex-direction: column-reverse;
        gap: 20px;
    }
`

export const ContentProduct = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    > img{
        width: 320px;
        border: 2px solid #A20D00;
    }

    > span{
        font-size: 50px;
        color: #A20D00;
        font-weight: bold;
    }

    @media(max-width: 800px){
        text-align: center;

        > h1{
            font-size: 25px;
        }

        > img{
            width: 280px;
            border: 2px solid #A20D00;
        }
        > span{
            font-size: 35px;
        }
    }
`