import {
    Content,
    Container,
    Form,
    ImageBanner,
    Inputs,
    ImageLogo,
    ContentForm
} from "../styles/RegisterUser";

import { useForm, SubmitHandler } from 'react-hook-form';

import pathLogo from '../assets/logo.png';

import React, { useEffect, useState } from "react";

import { baseApi } from "../api/api";

import { useNavigate, Link } from "react-router-dom";

import Button from "@mui/material/Button";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingComponent from "../components/Loading";

import Notifications from "../components/Notifications";

type FormInputRegisterProps = {
    first_name: string, 
    last_name: string,
    password: string,
    email: string,
    confirmation_password: string
}

export default function Login() {

    const { register, handleSubmit } = useForm<FormInputRegisterProps>();

    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const tokenGenerated = localStorage.getItem('tokenUser');

    useEffect(() => {

        if (tokenGenerated) {
            navigate('/');
        }

    }, []);

    const handleRegisterUser: SubmitHandler<FormInputRegisterProps> = (data) => {
        const { first_name, last_name, email, password, confirmation_password } = data;

        if (password !== confirmation_password) {
            Notifications('As senhas não são iguais', 'warning');
            return;
        }

        setLoading(true);

        baseApi.get(`/users?email=${email}`)
            .then(function (response) {
                if (response.data.length >= 1) {
                    Notifications('Já existe um usuário com esse email cadastrado!', 'error');
                } else {
                    baseApi.post('/users', {
                        email,
                        password,
                        first_name,
                        last_name,
                        isSeller: false,
                    })
                        .then(function (response) {
                            if (response.status === 201) {
                                Notifications('Conta criada com sucesso!', 'success');
                            }
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
                    <Form onSubmit={handleSubmit(handleRegisterUser)}>
                        <label htmlFor="first_name">
                            Primeiro Nome
                        </label>
                        <Inputs {...register("first_name", { required: true })} type="text" placeholder="Jhon" />

                        <label htmlFor="last_name">
                            Sobrenome
                        </label>
                        <Inputs {...register("last_name", { required: true })} type="text" placeholder="Doe" />

                        <label htmlFor="email">
                            Email
                        </label>
                        <Inputs {...register("email", { required: true })} type="email" placeholder="jhondoe@teste.com" />

                        <label htmlFor="password">
                            Senha
                        </label>
                        <Inputs {...register("confirmation_password", { required: true })} type="password" placeholder="Insira sua senha" />

                        <label htmlFor="confirmation_password">
                            Confirmação de senha
                        </label>
                        <Inputs {...register("password", { required: true })} type="password" placeholder="Insira sua confirmação de senha" />

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