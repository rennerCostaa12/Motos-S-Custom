import { useState, useEffect } from "react";

import { baseApi } from "../api/api";

import { MotorbikeProps } from "../types/defaultTypes";

export default function useGetMotorbike(idUser: string | undefined) {

    const [dataMotorbike, setDataMotorbike] = useState<MotorbikeProps>();

    useEffect(() => {
        baseApi.get(`/motorbikes/${idUser}`)
            .then(function (response) {
                setDataMotorbike(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return dataMotorbike
}