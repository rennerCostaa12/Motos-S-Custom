import React, { createContext, useState } from "react";

import { TypesMessagesAlertsProps } from '../types/defaultTypes';

type MessagesAlertsProps = {
    visible: boolean,
    setVisible: (data: boolean) => void,
    typeMessage: TypesMessagesAlertsProps,
    setTypeMessage: (data: TypesMessagesAlertsProps) => void,
    message: string,
    setMessage: (data: string) => void
}

type MessagesAlertsContextProviderProps = {
    children: React.ReactNode
}

export const MessagesAlerts = createContext({} as MessagesAlertsProps);

export default function MessagesAlertsContextProvider({ children }: MessagesAlertsContextProviderProps) {

    const [visible, setVisible] = useState<boolean>(false);
    const [typeMessage, setTypeMessage] = useState<'success' | 'warning' | 'info' | 'error'>('success');
    const [message, setMessage] = useState<string>('');

    return (
        <MessagesAlerts.Provider value={{ visible, setVisible, typeMessage, setTypeMessage, message, setMessage }}>
            {children}
        </MessagesAlerts.Provider>
    )
}