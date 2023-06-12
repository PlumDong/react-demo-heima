import store from "./store";
import {sendAction} from "./action";

export default function Home() {
    const handleClick = ()=>{
        const  v = sendAction()

        console.log("Home = ",v)
        store.dispatch(v)
    }

    return (
        <>
        <button onClick={handleClick}>发送一个action</button>
        <div>{store.getState().value}</div>
        </>

    );
}