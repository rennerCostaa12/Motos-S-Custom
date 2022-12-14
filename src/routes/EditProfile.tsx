import TextField from "@mui/material/TextField";
import { ContainerForm, ContentForm, Form, ContentButtonForm } from "../styles/FormStyle";

import Button from "@mui/material/Button";

import React, { useEffect, useState, useContext } from "react";

import { MessagesAlerts } from "../contexts/MessageAlerts";

import { baseApi } from "../api/api";
import { useNavigate } from "react-router-dom";

import ButtonBackPage from "../components/ButtonBackPage";

export default function EditProfile() {

    const [email, setEmail] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();

    const { setVisible, setTypeMessage, setMessage } = useContext(MessagesAlerts);


    const idUser = localStorage.getItem('user');
    useEffect(() => {

        baseApi.get(`/users/${idUser}`)
            .then(function (response) {
                setEmail(response.data.email);
                setFirstName(response.data.first_name);
                setLastName(response.data.last_name);
                setUsername(response.data.username);
                setPassword(response.data.password);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])


    const handleEditProfile = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        baseApi.patch(`/users/${idUser}`, {
            password: password,
            first_name: firstName,
            last_name: lastName,
            username: username,
            email: email
        })
            .then(function (response) {
                if (response.status === 200) {
                    setTypeMessage('success');
                    setMessage('Perfil editado com sucesso!');
                    setVisible(true);
                    navigate('/');
                }
            })
            .catch(function (error) {
                setTypeMessage('error');
                setMessage('Erro ao editar perfil!');
                setVisible(true);
                navigate('/');
            })
    }

    return (
        <ContainerForm>
            <ContentForm>
                <ButtonBackPage redirect="/" />
                <Form onSubmit={handleEditProfile}>
                    <h1>Editar Perfil</h1>
                    <TextField
                        color="primary"
                        name="fist_name"
                        label="Primeiro Nome"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email} required
                    />

                    <TextField
                        color="primary"
                        name="fist_name"
                        label="Primeiro Nome"
                        onChange={(event) => setFirstName(event.target.value)}
                        value={firstName} required
                    />

                    <TextField
                        color="primary"
                        name="last_name"
                        label="Sobrenome"
                        onChange={(event) => setLastName(event.target.value)}
                        value={lastName} required
                    />

                    <TextField
                        color="primary"
                        name="username"
                        label="Nome de usuário"
                        onChange={(event) => setUsername(event.target.value)}
                        value={username} required
                    />

                    <TextField
                        color="primary"
                        name="password"
                        label="Senha" type="password"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password} required
                    />

                    <ContentButtonForm>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Editar
                        </Button>
                    </ContentButtonForm>
                </Form>
            </ContentForm>
        </ContainerForm>
    )
}