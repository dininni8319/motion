import { useState, useEffect, useContext } from 'react';
import './App.css';
import { Navbar } from './components/UI/index';
import { ConfigContext } from './components/Context/Config/index';

const App = () => {
    return (
        <>
            <Navbar />
        </>
    );
};

export default App;
