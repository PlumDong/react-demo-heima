import React from "react";
import axios from "axios";
import { legacy_createStore as createStore } from 'redux'
import rootReducer from "./store/reducers";
import {TodoFooter} from "./components/TodoFooter";
import {TodoItem} from "./components/TodoItem";
import {TodoMain} from "./components/TodoMain";



export default function App() {
    return (
        <TodoMain></TodoMain>
    );
}