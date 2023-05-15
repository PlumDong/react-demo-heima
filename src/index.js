import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './index.css'
import classNames from 'classnames'



// 2. 数据
const isActive = true;
const isBlock = true;

// 3. 产生类名
const className = classNames('button', {
    active: isActive,
    block: isBlock,
});

const element = <span className={className}>按钮</span>;


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    element
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
