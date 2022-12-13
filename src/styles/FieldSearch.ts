import styled from "styled-components";


export const FormFieldSearch = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;

    /* FIELD SEARCH */
    > div{
        width: 320px;   
    }

    >button{
        height: 55px;
    }

    @media(max-width: 425px){
        > div{
            width: 100%;
        }
    }
`