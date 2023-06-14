import React from "react";
import Home from "./Home";
import Boy from "./pages/boy";


export default function App() {
    return (
        <div className='app'>
            <div className='boy'><Boy></Boy></div>
            <div className='girl'></div>
        </div>
    );
}