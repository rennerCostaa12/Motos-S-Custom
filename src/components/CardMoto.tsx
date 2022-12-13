import {
    ContentCard,
    ImageCard,
    TitleCard,
    DescriptionCard,
    ContentButtonDetails
}
    from "../styles/CardMoto";

import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import MenuCard from "./MenuCard";

import { UsersProps } from '../types/defaultTypes';

type CardMoto = {
    imageMotorbike: string,
    titleMotorbike: string,
    typeMotorbike: string,
    idMotorbike: number,
    dataUser: UsersProps,
}


export default function CardMoto({ imageMotorbike, titleMotorbike, typeMotorbike, idMotorbike, dataUser }: CardMoto) {

    const navigate = useNavigate();

    const handleSeeDetailsMotorbike = () => {
        navigate(`/detalhes/${idMotorbike}`);
    }

    return (
        <ContentCard>
            {dataUser.isSeller ? <MenuCard idMotorbike={idMotorbike} /> : ''}
            <ImageCard src={imageMotorbike} alt={titleMotorbike} />
            <TitleCard>{titleMotorbike}</TitleCard>
            <DescriptionCard>{typeMotorbike}</DescriptionCard>
            <ContentButtonDetails>
                <Button sx={{ m: 2 }} variant="contained" onClick={handleSeeDetailsMotorbike}>
                    VER DETALHES
                </Button>
            </ContentButtonDetails>
        </ContentCard>
    )
}