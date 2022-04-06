import React from 'react'
import ReactDOM from 'react-dom'
import { createContext } from 'react';

export const ConfigContext = createContext();

export function ConfigProvider(props) {
    const url = {
        backend: process.env.REACT_APP_API_URL
    };

    return (
        <ConfigContext.Provider value={{ url }}>
            {props.children}
        </ConfigContext.Provider>
    );
}
