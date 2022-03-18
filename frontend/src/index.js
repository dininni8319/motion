import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddPost from './components/Views/AddPost/AddPost';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/add-post" element={<AddPost />}></Route>
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
