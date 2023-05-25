import React, {Component, useState} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import axios from "axios";

export default () => {
    const [user, setUser] = useState({ name: 'jack', age: 18 });
    const onAgeAdd = () => {
        setUser({
            ...user,
            age: user.age + 1,
        });
    };
    return (
        <div>
            <p>姓名：{user.name}</p>
            <p>年龄：{user.age}</p>
            <button onClick={onAgeAdd}>年龄+1</button>
        </div>
    );
}