import {
    Content,
    Container,
    Form,
    ImageBanner,
    Inputs,
    ImageLogo,
    ContentForm
} from "../styles/RegisterUser";

import pathLogo from '../assets/logo.png';

import React, {useEffect, useState } from "react";

import { baseApi } from "../api/api";

import { useNavigate, Link } from "react-router-dom";

import Button from "@mui/material/Button";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingComponent from "../components/Loading";

export default function Login() {

    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const tokenGenerated = localStorage.getItem('tokenUser');

    useEffect(() => {

        if (tokenGenerated) {
            navigate('/');
        }

    }, []);


    const handleRegisterUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setLoading(true);

        const formData = new FormData(event.target as HTMLFormElement);

        const data = Object.fromEntries(formData);

        const { first_name, last_name, email, password, confirmation_password } = data;

        if (password !== confirmation_password) {
            toast.warning('As senhas não iguais!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        baseApi.get(`/users?email=${email}`)
            .then(function (response) {
                if (response.data.length >= 1) {
                    toast.error('Já existe um usuário com esse email cadastrado! Insira outro email.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                } else {
                    baseApi.post('/users', {
                        email,
                        password,
                        first_name,
                        last_name,
                        isSeller: false,
                    })
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                        .finally(() => {
                            setLoading(false);
                        })

                    navigate('/');
                }
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <Container>
            {loading && <LoadingComponent typeLoading="linear" />}
            <Content>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
                <ContentForm>
                    <ImageLogo src={pathLogo} alt="logo" />
                    <Form onSubmit={handleRegisterUser}>
                        <label htmlFor="first_name">
                            Primeiro Nome
                        </label>
                        <Inputs name="first_name" type="text" placeholder="Jhon" required />

                        <label htmlFor="password">
                            Sobrenome
                        </label>
                        <Inputs name="last_name" type="text" placeholder="Doe" required />

                        <label htmlFor="email">
                            Email
                        </label>
                        <Inputs name="email" type="email" placeholder="jhondoe@teste.com" required />

                        <label htmlFor="password">
                            Senha
                        </label>
                        <Inputs name="confirmation_password" type="password" placeholder="Insira sua senha" required />

                        <label htmlFor="confirmation_password">
                            Confirmação de senha
                        </label>
                        <Inputs name="password" type="password" placeholder="Insira sua confirmação de senha" required />

                        <div>
                            <Button type="submit" variant="contained">
                                Criar conta
                            </Button>
                        </div>

                        <span>Caso tenha conta cadastrada, <Link to="/login">clique aqui</Link></span>
                    </Form>
                </ContentForm>
                <ImageBanner />
            </Content>
        </Container>
    )
}