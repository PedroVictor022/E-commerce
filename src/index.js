import React from 'react';
import ReactDOM from 'react-dom/client';
import { RoutesApp } from './routes/app';
import { Global } from './styles/Global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global />
    <RoutesApp />
  </React.StrictMode>
);