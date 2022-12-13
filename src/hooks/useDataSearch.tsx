import { useState, useEffect } from "react"

import { baseApi } from "../api/api"

import { MotorbikeProps, UsersProps } from '../types/defaultTypes';

export default function useDataSearch(query: string | undefined, typeQuery: 'motorbike' | 'users') {

    const [dataSearchMotorbike, setDataSearchMotorbike] = useState<MotorbikeProps[]>();
    const [dataSearchUsers, setDataSearchUsers] = useState<UsersProps[]>();

    useEffect(() => {
        if (typeQuery === "motorbike") {
            baseApi.get(`/motorbikes?q=${query}&_sort=id&_order=desc`)
                .then(function (response) {
                    setDataSearchMotorbike(response.data);
                })
                .catch(function (error) {
                    console.log(error.code);
                })
        } else {
            baseApi.get(`/users?q=${query}`)
                .then(function (response) {
                    setDataSearchUsers(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

    }, [query]);

    return { dataSearchMotorbike, dataSearchUsers }
}