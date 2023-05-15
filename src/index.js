import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// 数据
const data = {
    name: 'tom',
    age: 18,
};

// 函数
const up = () => {
    return data.name.toUpperCase();
};

// jsx表达式
const list = (
    <ul>
        <li>jack</li>
        <li>tony</li>
    </ul>
);

const element = (
    <div>
         {/*1. 使用数据  注释推荐快键键(ctrl+/)  */}
        <div>姓名：{data.name}</div>
        <div>年龄：{data.age}</div>
        {/* 2. 使用运算 */}
        <div>明年几岁：{data.age + 1}</div>
        {/* 3. 使用三元 */}
        <div>是否成年：{data.age > 16 ? '是' : '否'}</div>
        {/* 4. 使用函数 */}
        <div>姓名大写：{up()}</div>
        {/* 5. 使用JSX(jsx也是表达式) */}
        <div>朋友：{list}</div>
    </div>
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    element
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
