import React from 'react';
import ReactDOM from 'react-dom/client';
import WujieReact from "wujie-react";
import App from './App';
import { AppName } from './tools/const';
import './index.css';
import { getAppConfigure } from './tools/utils';

const { setupApp } = WujieReact;

// 子应用 1
setupApp(getAppConfigure(AppName.React18));

// 子应用 2
setupApp(getAppConfigure(AppName.Vue3));

// 子应用 3
setupApp(getAppConfigure(AppName.Vue2));

const app = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
