import {
    ContainerFinalizePurchase,
    ContentProduct
} from "../styles/FinalizePurchase";

import { useNavigate, useParams } from "react-router-dom"
import { baseApi } from "../api/api";

import Button from "@mui/material/Button";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import ButtonBackPage from "../components/ButtonBackPage";
import React from "react";

import { useContext } from "react";
import { MessagesAlerts } from "../contexts/MessageAlerts";

import useGetMotorbike from "../hooks/useGetMotorbike";

export default function FinalizeMotorbikePurchase() {

    const { id } = useParams();
    const dataMotorbike = useGetMotorbike(id);
    const idUser = localStorage.getItem('user');

    const navigate = useNavigate();

    const { setVisible, setTypeMessage, setMessage } = useContext(MessagesAlerts);

    const handlePurchase = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);

        const data = Object.fromEntries(formData);

        const { method_payment } = data;

        const date = new Date();

        const datePayment = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getFullYear()).padStart(2, '0')}`;

        baseApi.post('/purchases', {
            userId: Number(idUser),
            motorbikeId: Number(id),
            method_payment: method_payment,
            date_purchase: datePayment,
        })
            .then(function (response) {
                if (response.status === 201) {
                    setMessage('Compra efetuada com sucesso!');
                    setTypeMessage('success');
                    setVisible(true);
                    navigate('/');
                }
            })
            .catch(function (error) {
                alert('Error ao efetuar compra!');
            })

    }

    return (
        <ContainerFinalizePurchase>
            <div>
                <ButtonBackPage redirect={`/detalhes/${id}`} />
            </div>
            <form onSubmit={handlePurchase}>
                <FormControl>
                    <FormLabel id="method_payment">Formas de pagamento</FormLabel>
                    <RadioGroup
                        aria-labelledby="method_payment"
                        defaultValue="cartao credito"
                        name="method_payment"
                    >
                        <FormControlLabel value="cartao credito" control={<Radio />} label="Cartão de Crédito" />
                        <FormControlLabel value="cartao debito" control={<Radio />} label="Cartão de Débito" />
                        <FormControlLabel value="pix" control={<Radio />} label="Pix" />
                    </RadioGroup>

                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                    >
                        Finalizar Compra
                    </Button>
                </FormControl>
            </form>
            <ContentProduct>
                <h1>{dataMotorbike && dataMotorbike.name}</h1>
                <img src={dataMotorbike && dataMotorbike.photo} alt={`Imagem ${dataMotorbike && dataMotorbike.name}`} />
                <span>{dataMotorbike && dataMotorbike.price && dataMotorbike && dataMotorbike.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
            </ContentProduct>
        </ContainerFinalizePurchase>
    )
}