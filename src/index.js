import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const loading = true;

const element = (
    <div>
        {loading && <div>正在加载...</div>}
        {loading || <div>数据加载完毕，这是显示数据</div>}
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
