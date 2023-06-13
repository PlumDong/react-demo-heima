import store from "./store";
import {sendAction} from "./action";
import {useEffect, useState} from "react";
import ComA from "./pages/ComA";
import ComB from "./pages/ComB";
import {Provider} from "react-redux";

export default function Home() {

    return (
        <>
            <Provider store={store}>
                <ComA/>
                <ComB/>
            </Provider>

        </>

    );
}