import { useState, useEffect } from "react";

import { baseApi } from "../api/api";

import { UsersProps } from "../types/defaultTypes";

export default function useGetUser(idUser: string) {

    const [userData, setUserData] = useState<UsersProps>();

    useEffect(() => {
        baseApi.get(`/users/${idUser}`)
            .then(function (response) {
                setUserData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return userData
}