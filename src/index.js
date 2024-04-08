import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './Router/router';
import { ToastContainer } from 'react-toastify';
import './styled-global.css';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <ToastContainer />
        <Rotas />
    </>
);
