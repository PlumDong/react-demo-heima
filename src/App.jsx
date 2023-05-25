import React, {Component, useEffect, useState} from "react";

export default () => {
    const [count, setCount] = useState(0);

// 1
// 触发时机：1 第一次渲染会执行 2 每次组件重新渲染都会再次执行
// componentDidMount + ComponentDidUpdate
    useEffect(() => {
    });

// 2（使用频率最高）
// 触发时机：只在组件第一次渲染时执行
// componentDidMount
    useEffect(() => {
    }, []);

// 3（使用频率最高）
// 触发时机：1 第一次渲染会执行 2 当 count 变化时会再次执行
// componentDidMount + componentDidUpdate（判断 count 有没有改变）
    useEffect(() => {
    }, [count]);

// 4
    useEffect(() => {
        // 返回值函数的执行时机：组件卸载时
        // 在返回的函数中，清理工作
        return () => {
            // 相当于 componentWillUnmount
        };
    }, []);

    useEffect(() => {
        // 返回值函数的执行时机：1 组件卸载时 2 count 变化时
        // 在返回的函数中，清理工作
        return () => {
        };
    }, [count]);
    return (<div>
            <h1>计数器：{count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>);
}