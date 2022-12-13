import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > h1{
        text-align: center;
        margin: 1rem;
    }

    @media(max-width: 425px){
        > h1{
            font-size: 27px;
        }
    }
`

export const ContentItems = styled.div`
    display: flex;
    justify-content: center;
    gap: 35px;
    flex-wrap: wrap;
    margin: 3rem 0;

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
`

export const ContentSearchItems = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;

    > div{
        width: 350px;
    }

    @media(max-width: 425px){
        > div{
            width: 300px;
        }
    }
`

export const ContentPagination = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`