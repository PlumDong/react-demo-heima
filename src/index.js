import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ReactDom from 'react-dom'

// 1. 数据
const list = [
    {id: 100, name: 'tom', age: 15},
    {id: 101, name: 'jack', age: 18},
    {id: 102, name: 'tony', age: 20}
]

// +// 2. 样式
const styleObject = {
    listStyle: 'none',
    backgroundColor: 'pink',
    fontSize: 20
}
// 3. 使用
const element = (
    <ul style={styleObject}>
        {list.map(item => {
            return (
                <li key={item.id}>
                    <p style={{fontSize: '2em'}}>姓名：{item.name}</p>
                    <p>是否成年：{item.age > 16 ? '是' : '否'}</p>
                </li>
            )
        })}
    </ul>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    element
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
