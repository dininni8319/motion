import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddPost from './components/Views/AddPost/AddPost';
import { GlobalStyle, Theme } from './components/GlobalStyle/style';
import { ThemeProvider } from 'styled-components';
import Register from './components/Views/AddPost/Register/Register';
import Login from './components/Views/AddPost/Login/Login';
import { ConfigProvider } from './components/Context/Config/index';
import { AuthProvider } from './components/Context/Auth/index';
import ProtectedRoute from './components/utilities/ProtectedRoute'

ReactDOM.render(
    <React.StrictMode>
        <ConfigProvider>
            <AuthProvider>
                <ThemeProvider theme={Theme}>
                    <Router>
                        
                        <Routes>
                            <Route path="/" element={<App />}></Route>
                            
                            <Route path="/add-post" element={
                                <ProtectedRoute>
                                    <AddPost />
                                </ProtectedRoute>
                            }></Route>
                            <Route path="/login" element={<Login />}></Route>
                            <Route path="/register" element={<Register />}></Route>
                        </Routes>
                    </Router>
                </ThemeProvider>
            </AuthProvider>
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
