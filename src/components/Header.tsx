import { HeaderContent } from "../styles/Header"
import pathLogo from '../assets/logo.png';
import MenuUser from "./MenuUser";

import { useState, useEffect } from "react";
import { baseApi } from "../api/api";

import { UsersProps } from "../types/defaultTypes";

export default function Header() {

    const [user, setUser] = useState<UsersProps>();
    
    const idUser = localStorage.getItem('user');
    useEffect(() => {
        baseApi.get(`/users/${idUser}`)
            .then(function (response) {
                setUser(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return (
        <HeaderContent>
            <img src={pathLogo} alt="logo" />

            <MenuUser
                isSeller={user && user.isSeller}
                firstName={user && user.first_name}
                lastName={user && user.last_name}
            />

        </HeaderContent>
    )
}