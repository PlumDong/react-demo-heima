import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Warning: Each child in a list should have a unique "key" prop.
// 1. 数据
const list = [
    {id: 100, name: 'tom', age: 15},
    {id: 101, name: 'jack', age: 18},
    {id: 102, name: 'tony', age: 20},
];// 2. 使用
const element = (
    <ul>
        {list.map((item, index) => (
            <li key={index}>{item.name} {item.age >= 18 ? '成年' : '未成年'}</li>
        ))}
    </ul>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    element
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
