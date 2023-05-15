import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// 数据
const isActive = true;
const isBlock = false;

// 类名对象
const classObject = {
    button: true,
    active: isActive,
    block: isBlock,
};

// 转换成字符串
const className = Object.keys(classObject)
    .filter((key) => classObject[key])
    .join(' ');

const element =
    <>{classObject.button && <span className={className}>按钮</span>}</>;


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    element
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
