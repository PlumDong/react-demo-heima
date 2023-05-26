import React from "react";
import {CartHeader} from "./components/CartHeader";
import CartFooter from "./components/CartFooter";
import {GoodsItem} from "./components/GoodsItem";

export default function App() {
    return (
        <div className="app">
            <CartHeader>购物车</CartHeader>
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
            <CartFooter />
        </div>
    );
}