import TextField from "@mui/material/TextField";
import {
    ContainerForm,
    ContentForm,
    Form,
    ContentButtonForm,
    ContentRowInput
} from "../styles/FormStyle";

import Button from "@mui/material/Button";

import React, { useEffect, useState, useContext } from "react";

import { baseApi } from "../api/api";
import { useNavigate, useParams } from "react-router-dom";

import { MessagesAlerts } from "../contexts/MessageAlerts";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import ButtonBackPage from "../components/ButtonBackPage";

import { MotorcycleBrandProps, TypesMotorbikeProps } from '../types/defaultTypes';

export default function EditAndAnnounceSales() {

    const [linkImage, setLinkImage] = useState<string>('');
    const [nameMotorbike, setNameMotorbike] = useState<string>('');
    const [engineCapacity, setEngineCapacity] = useState<number>(0);
    const [motorcycleBrand, setMotorcycleBrand] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [typeMotorbike, setTypeMotorbike] = useState<string>('');
    const [priceMotorbike, setPriceMotorbike] = useState<number>(0);


    const { setVisible, setTypeMessage, setMessage } = useContext(MessagesAlerts);

    const navigate = useNavigate();

    const { id } = useParams();

    if (id) {
        useEffect(() => {
            baseApi.get(`/motorbikes/${id}`)
                .then(function (response) {
                    setLinkImage(response.data.photo);
                    setNameMotorbike(response.data.name);
                    setEngineCapacity(response.data.engine_capacity);
                    setMotorcycleBrand(response.data.motorcycle_brand);
                    setDescription(response.data.description);
                    setTypeMotorbike(response.data.type);
                    setPriceMotorbike(response.data.price);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }, []);
    }



    const handleEditAnnounceMotorbike = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        baseApi.patch(`/motorbikes/${id}`, {
            photo: linkImage,
            name: nameMotorbike,
            motorcycle_brand: motorcycleBrand,
            engine_capacity: engineCapacity,
            type: typeMotorbike,
            description: description,
            price: Number(priceMotorbike)
        })
            .then(function (response) {
                if (response.status === 200) {
                    setTypeMessage('success');
                    setMessage('Anúncio editado com sucesso!');
                    setVisible(true);
                    navigate('/');
                }
            })
            .catch(function (error) {
                setTypeMessage('error');
                setMessage('Erro ao editar venda!');
                setVisible(true);
                navigate('/')
            })
    }

    const handleAnnounceMotorbike = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        baseApi.post('/motorbikes', {
            photo: linkImage,
            name: nameMotorbike,
            motorcycle_brand: motorcycleBrand,
            engine_capacity: engineCapacity,
            type: typeMotorbike,
            description: description,
            price: priceMotorbike
        })
            .then(function (response) {
                if (response.status === 201) {
                    setTypeMessage('success');
                    setMessage('Anúncio inserido com sucesso!');
                    setVisible(true);
                    navigate('/');
                }
            })
            .catch(function (error) {
                setTypeMessage('error');
                setMessage('Erro ao anunciar venda!');
                setVisible(true);
                navigate('/')
            })

    }

    const isSale = id ? handleEditAnnounceMotorbike : handleAnnounceMotorbike;

    return (
        <ContainerForm>
            <ContentForm>
                <ButtonBackPage redirect="/" />
                <Form onSubmit={isSale}>
                    <h1>{id ? "Editar Anúncio" : "Anunciar Moto"}</h1>
                    <TextField
                        color="primary"
                        name="link_image"
                        label="Link da imagem"
                        onChange={(event) => setLinkImage(event.target.value)}
                        value={linkImage} required
                    />

                    <TextField
                        color="primary"
                        name="name_motorbike"
                        label="Nome do moto"
                        onChange={(event) => setNameMotorbike(event.target.value)}
                        value={nameMotorbike} required
                    />

                    <TextField
                        color="primary"
                        name="description"
                        label="Descrição"
                        onChange={(event) => setDescription(event.target.value)}
                        value={description} required
                    />

                    <ContentRowInput>
                        <TextField
                            color="primary"
                            name="description"
                            label="Preço"
                            type="number"
                            onChange={(event) => setPriceMotorbike(Number(event.target.value))}
                            value={priceMotorbike} required
                        />

                        <TextField
                            color="primary"
                            name="engine_capacity"
                            label="Cilindradas" type="number"
                            onChange={(event) => setEngineCapacity(Number(event.target.value))}
                            value={engineCapacity} required
                        />
                    </ContentRowInput>
                    <ContentRowInput>
                        <FormControl>
                            <InputLabel id="brand">Marca</InputLabel>
                            <Select
                                color="primary"
                                labelId="brand"
                                id="brand"
                                value={motorcycleBrand}
                                label="Marca"
                                onChange={(event) => setMotorcycleBrand(event.target.value as MotorcycleBrandProps)}
                            >
                                <MenuItem value="Honda">Honda</MenuItem>
                                <MenuItem value="Yamaha">Yamaha</MenuItem>
                                <MenuItem value="Harley-Davidson">Harley-Davidson</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl>
                            <InputLabel id="type_motorbike">Tipo de moto</InputLabel>
                            <Select
                                color="primary"
                                labelId="type_motorbike"
                                id="type_motorbike"
                                value={typeMotorbike}
                                label="Tipo de moto"
                                onChange={(event) => setTypeMotorbike(event.target.value as TypesMotorbikeProps)}
                            >
                                <MenuItem value="Custom">Custom</MenuItem>
                                <MenuItem value="Sport">Sport</MenuItem>
                                <MenuItem value="Scooter">Scooter</MenuItem>
                            </Select>
                        </FormControl>
                    </ContentRowInput>
                    <ContentButtonForm>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            {id ? "Editar Anúncio" : "Anunciar Venda"}
                        </Button>
                    </ContentButtonForm>
                </Form>
            </ContentForm>
        </ContainerForm>
    )
}