import {
    Content,
    Container,
    Form,
    ImageBanner,
    Inputs,
    ImageLogo,
    ContentForm
} from "../styles/Login";

import { Lock, User } from "phosphor-react";

import pathLogo from '../assets/logo.png';

import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../contexts/Auth";

import { baseApi } from "../api/api";

import { useNavigate, Link } from "react-router-dom";

import Button from "@mui/material/Button";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingComponent from "../components/Loading";

import Notifications from "../components/Notifications";

export default function Login() {

    const [loading, setLoading] = useState<boolean>(false);

    const { login, handleCreateToken } = useContext(UsersContext);

    const navigate = useNavigate();

    const tokenGenerated = localStorage.getItem('tokenUser');

    useEffect(() => {

        if (tokenGenerated) {
            navigate('/');
        }

    }, []);


    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);

        const data = Object.fromEntries(formData);

        const { email, password } = data;

        setLoading(true);
        baseApi.get(`/users?email=${email}`)
            .then(function (response) {
                if (response.data.length > 0) {
                    if (response.data[0].password === password) {
                        handleCreateToken();
                        login(response.data[0].id);
                        navigate('/');
                    } else {
                        Notifications('Senha incorreta!', 'error');
                    }
                } else {
                    Notifications('Email incorreto!', 'error');
                }
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
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
                    <Form onSubmit={handleLogin}>
                        <label htmlFor="email">
                            <User size={20} />
                            E-mail
                        </label>
                        <Inputs name="email" type="email" placeholder="Insira seu e-mail" required />
                        <label htmlFor="password">
                            <Lock size={20} />
                            Senha
                        </label>
                        <Inputs name="password" type="password" placeholder="Insira sua senha" required />

                        <div>
                            <Button type="submit" variant="contained">
                                Acessar Conta
                            </Button>
                        </div>

                        <span>Caso ainda não tenha nenhuma conta cadastrada, <Link to="/cadastro_usuario">clique aqui</Link></span>
                    </Form>
                </ContentForm>
                <ImageBanner />
            </Content>
        </Container>
    )
}