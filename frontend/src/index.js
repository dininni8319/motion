import React from 'react';
import ReactDOM from 'react-dom';
// react-routes
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/utilities/ProtectedRoute';

// Views
import App from './App';
import Register from './components/Views/Register/Register';
import Login from './components/Views/Login/Login';
import AddPost from './components/Views/AddPost/AddPost';
import UserDetailPage from './components/Views/UserDetaiPage/UserDetailPage';

// Style
import { GlobalStyle, Theme } from './components/GlobalStyle/style';
import { ThemeProvider } from 'styled-components';

// Contexts
import { ConfigProvider } from './components/Context/Config/index';
import { AuthProvider } from './components/Context/Auth/index';
import { PostsProvider } from './components/Context/PostsContext/index';

ReactDOM.render(
    <React.StrictMode>
        <ConfigProvider>
            <AuthProvider>
                <PostsProvider>
                    <ThemeProvider theme={Theme}>
                        <Router>
                            <Routes>

                                <Route
                                    path="/"
                                    element={
                                        <ProtectedRoute>
                                            <AddPost />
                                        </ProtectedRoute>
                                    }
                                ></Route>
                                <Route
                                    path="/users-detail-page/:slug"
                                    element={
                                        <ProtectedRoute>
                                            <UserDetailPage />
                                        </ProtectedRoute>
                                    }
                                ></Route>
                                <Route
                                    path="/login"
                                    element={<Login />}
                                ></Route>
                                <Route
                                    path="/register"
                                    element={<Register />}
                                ></Route>
                            </Routes>
                        </Router>
                    </ThemeProvider>
                </PostsProvider>
            </AuthProvider>
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
