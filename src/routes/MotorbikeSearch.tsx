import { Container, Content, ContentCards, ContentSearch } from "../styles/MotorbikeSearch";

import React from "react";
import { useParams } from "react-router-dom";

import FieldSearch from "../components/FieldSearch";
import CardMoto from "../components/CardMoto";
import ButtonBackPage from "../components/ButtonBackPage";

import useDataSearch from "../hooks/useDataSearch";

import useGetUser from "../hooks/useGetUser";

export default function MotorbikeSearch() {

    const { name_motorbike } = useParams();

    const idUser = localStorage.getItem('user') as string;

    const user = useGetUser(idUser);

    const { dataSearchMotorbike } = useDataSearch(name_motorbike, 'motorbike');


    return (
        <Container>
            <Content>
                <ButtonBackPage redirect="/" />
                
                <ContentSearch>
                    <FieldSearch />
                    <span>Você pesquisou por: <strong> {name_motorbike} </strong> </span>
                </ContentSearch>

                {dataSearchMotorbike?.length === 0 && 
                    <span><strong>Nenhuma moto encontrada!</strong></span>
                }

                <ContentCards>
                    {dataSearchMotorbike &&
                        dataSearchMotorbike.map((value) => {
                            return (
                                <React.Fragment key={value.id}>
                                    {user &&
                                        <CardMoto
                                            dataUser={user}
                                            imageMotorbike={value.photo}
                                            titleMotorbike={value.name}
                                            typeMotorbike={value.type}
                                            idMotorbike={value.id}
                                        />
                                    }
                                </React.Fragment>
                            )
                        })
                    }
                </ContentCards>
            </Content>
        </Container>
    )
}