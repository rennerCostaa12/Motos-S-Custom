import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

type PrivateRouteProps = {
    children: React.ReactNode
}

export default function PrivateRoute({ children }: PrivateRouteProps) {

    const navigate = useNavigate();

    const tokenGenerated = localStorage.getItem('tokenUser');

    useEffect(() => {
        if(!tokenGenerated){
            navigate("/login");
        }
    }, [])


    return (
        <>
            {children}
        </>
    )
}