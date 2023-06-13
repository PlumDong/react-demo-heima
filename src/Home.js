import store from "./store";
import {sendAction} from "./action";
import {useEffect, useState} from "react";

export default function Home() {
    const [value, setValue] = useState(store.getState().value);

    const handleClick = ()=>{
        const  v = sendAction()
        console.log("Home = ",v)
        store.dispatch(v)
    }
    useEffect( ()=>{
        store.subscribe((k)=>{
            console.log('subscribe = ',store.getState());
            setValue(store.getState().value)
        })
    } , [] )

    return (
        <>
        <button onClick={handleClick}>发送一个action</button>
        <div>{value}</div>
        </>

    );
}