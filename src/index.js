import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 在src下新建index.css文件，导入进来即可
import './index.css';

const isActive = true;

const element = (
    <span className={`button ${isActive ? 'active' : ''}`}>按钮</span>
);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    element
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
