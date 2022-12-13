import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type UsersContextProviderProps = {
    children: React.ReactNode
}

type AuthContextProps = {
    handleCreateToken: () => void,
    logout: () => void,
    login: (data: number) => void,
    updateList: string,
    setUpdateList: (data: string) => void,
}

export const UsersContext = createContext({} as AuthContextProps);


export default function UsersContextProvider({ children }: UsersContextProviderProps) {

    const [updateList, setUpdateList] = useState<string>('');

    const login = (dataUser: number) => {
        const datas = JSON.stringify(dataUser);
        localStorage.setItem('user', datas);
    }

    const handleCreateToken = () => {
        localStorage.setItem('tokenUser', uuidv4());
    }

    const logout = () => {
        localStorage.removeItem('tokenUser');
        localStorage.removeItem('user');
    }


    return (
        <UsersContext.Provider value={{ handleCreateToken, logout, login, updateList, setUpdateList }}>
            {children}
        </UsersContext.Provider>
    )
}