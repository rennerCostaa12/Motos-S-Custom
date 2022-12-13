import styled from "styled-components";

export const HeaderContent = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #EB1A2F;

    padding: 1rem;

    > img{
        width: 80px;
    }
`

export const Nav = styled.nav`
    ul{
        display: flex;
        list-style: none;
        gap: 30px;

        li{
            font-size: 18px;
            font-weight: bold;
            transform: scale(0.9);

            a{
                color: #f1f1f1;
                text-decoration: none;
            }

            :hover{
                transition: all ease 0.3s;
                transform: scale(1);
                border-bottom: 2px solid #ffff;
            }
        }
    }

`

export const ContentUser = styled.div`
    font-size: 20px;

    .dropdown-toggle.btn.btn-secondary{
        color: #000;
        background-color: #ffff;
        border: 2px solid #EB1A2F;
    }
`