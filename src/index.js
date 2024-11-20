import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import { createGlobalStyle } from 'styled-components';

// Глобальные стили для ссылок
const GlobalStyle = createGlobalStyle`
    a {
        color: inherit;
        text-decoration: none;
    }
    a:visited {
        text-decoration: none;
        color: inherit;
    }
    a:hover {
        text-decoration: none;
        color: inherit;
    }
    a:focus {
        text-decoration: none;
        color: inherit;
    }
    a:active {
        text-decoration: none;
        color: inherit;
    }
`;



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <GlobalStyle />
        <App />
        
    </>
);
