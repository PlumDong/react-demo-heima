import axios from 'axios';
import {useEffect, useState} from 'react';
import {GoodsItem} from "./components/GoodsItem";

const http = axios.create({
    baseURL: 'http://localhost:8888',
});

export default function App() {

    const [goodsList, setGoodsList] = useState([]);
    const loadData = async () => {
        const res = await http.get('/goodsList');
        setGoodsList(res.data);
    };
    const changeGoodsState = async (id, goods_state) => {
        await http.patch(`/goodsList/${id}`, {
            goods_state,
        });
        loadData();
    };
    useEffect(() => {
        loadData();
    }, []);
    return (
        <div className="app">
            {/* 商品列表项 */}
            {goodsList.map((item) => (
                <GoodsItem key={item.id} {...item} changeGoodsState={changeGoodsState} />
            ))}
        </div>
    );
}