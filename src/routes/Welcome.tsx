import React from "react";

import { ContentItems, ContentSearchItems, Container, ContentPagination } from "../styles/Welcome";

import { useContext, useEffect, useState } from "react"
import { UsersContext } from "../contexts/Auth";
import { MessagesAlerts } from "../contexts/MessageAlerts";

import Header from "../components/Header";
import CardMoto from "../components/CardMoto";
import MessageAlert from "../components/MessageAlerts";
import LoadingComponent from "../components/Loading";
import Pagination from "../components/Pagination";
import FieldSearch from "../components/FieldSearch";

import { baseApi } from "../api/api";

import { MotorbikeProps } from '../types/defaultTypes';

import useCountData from "../hooks/useCountData";

import useGetUser from "../hooks/useGetUser";

export default function Welcome() {

    const [listMotorbike, setListMotorbike] = useState<MotorbikeProps[]>();
    const [pageCurrent, setPageCurrent] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);

    const { updateList } = useContext(UsersContext);
    const { visible, setVisible, typeMessage, message } = useContext(MessagesAlerts);

    const limitData = 6;
    const countData = useCountData('motorbikes');

    const idUser = localStorage.getItem('user') as string;

    const dataUser = useGetUser(idUser);

    useEffect(() => {
        setLoading(true);
        baseApi.get(`/motorbikes?_page=${pageCurrent}&_limit=${limitData}&_sort=id&_order=desc`)
            .then(function (response) {
                setListMotorbike(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [updateList, pageCurrent]);

    const totalItems = listMotorbike?.length;

    return (
        <div>
            <Header />
            <MessageAlert
                typeMessage={typeMessage}
                message={message}
                setIsShowMessageAlert={setVisible}
                isShowMessageAlert={visible}
            />
            <Container>
                <h1>TODOS OS MODELOS</h1>
                {loading && <LoadingComponent typeLoading="backdrop" />}
                <ContentSearchItems>
                   <FieldSearch />
                </ContentSearchItems>

                <ContentItems>
                    {listMotorbike &&
                        listMotorbike.map((value) => {
                            return (
                                <React.Fragment key={value.id}>
                                    {dataUser &&
                                        <CardMoto
                                            dataUser={dataUser}
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

                </ContentItems>

                {totalItems &&
                    <ContentPagination>
                        <Pagination
                            setPages={setPageCurrent}
                            countPages={Math.ceil(countData / limitData)}
                            page={pageCurrent}
                        />
                    </ContentPagination>
                }
            </Container>
        </div>
    )
}