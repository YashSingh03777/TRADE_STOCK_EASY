import React from 'react'

import ReactDom from 'react-dom/authform';

import "./index.css";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render (
     <React.StrictMode> 
            <BrowserRouter>
                <App />
            </BrowserRouter>
     </React.StrictMode>
);
    

