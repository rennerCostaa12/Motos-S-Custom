import { useParams, useNavigate } from "react-router-dom";

import {
    Container,
    ContentBanner,
    TitleMotorbike,
    DescriptionMotorbike,
    ContentDescriptionBanner,
    SalesAreaMotorbike,
    FeatureMotorbike,
    PriceMotorbike
} from "../styles/DetailsMotorBike";

import pathBackgroundSport from '../assets/background_sport.jpg';
import pathBackgroundCustom from '../assets/background_custom.jpg';
import pathBackgroundScooter from '../assets/background_scooter.jpg';

import ButtonBackPage from "../components/ButtonBackPage";

import Button from "@mui/material/Button";

import useGetMotorbike from "../hooks/useGetMotorbike";


export default function DetailsMotorbike() {

    let { id } = useParams();
    let navigate = useNavigate();

    scroll(0, 0);

    const dataMotorbike = useGetMotorbike(id as string);

    let pathImage;

    if (dataMotorbike) {
        if (dataMotorbike.type === 'Custom') {
            pathImage = pathBackgroundCustom;
        } else if (dataMotorbike.type === 'Sport') {
            pathImage = pathBackgroundSport;
        } else {
            pathImage = pathBackgroundScooter
        }
    }

    const handleRedirectFinalizePurchase = () => {
        navigate(`/finalizar_compra/${id}`);
    }

    return (
        <Container>
            <ButtonBackPage redirect="/" />

            <ContentBanner style={{ backgroundImage: `url(${pathImage})` }} />

            <ContentDescriptionBanner>
                <TitleMotorbike>{dataMotorbike && dataMotorbike.name}</TitleMotorbike>
                <DescriptionMotorbike>{dataMotorbike && dataMotorbike.description}</DescriptionMotorbike>
            </ContentDescriptionBanner>

            <SalesAreaMotorbike>
                <img src={dataMotorbike && dataMotorbike.photo} alt={dataMotorbike && dataMotorbike.name} />

                <FeatureMotorbike>
                    <PriceMotorbike>{dataMotorbike && dataMotorbike.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</PriceMotorbike>
                    <span> Marca: {dataMotorbike && dataMotorbike.motorcycle_brand}</span>
                    <span> Cinlindradas: {dataMotorbike && dataMotorbike.engine_capacity}</span>
                    <span> Modelo: {dataMotorbike && dataMotorbike.type}</span>
                    <Button sx={{ mt: 2 }} variant="contained" onClick={handleRedirectFinalizePurchase}>
                        COMPRAR
                    </Button>
                </FeatureMotorbike>
            </SalesAreaMotorbike>
        </Container>
    )
}