import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddPost from './components/Views/AddPost/AddPost';
import Sign from './components/Views/Sign/Sign';
import Navbar from './components/UI/Navbar/Navbar';
import { GlobalStyle, Theme } from './components/GlobalStyle/style';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/add-post" element={<AddPost />}></Route>
                    <Route path="/sign" element={<Sign />}></Route>
                </Routes>
            </Router>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
