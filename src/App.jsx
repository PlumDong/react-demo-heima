import axios from 'axios';
import {useEffect, useState} from 'react';
import {GoodsItem} from "./components/GoodsItem";

const http = axios.create({
    baseURL: 'http://localhost:8888',
});

export default function App() {
    const [goodsList, setGoodsList] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const res = await http.get('/goodsList');
            setGoodsList(res.data);
        };
        loadData();
    }, []);

    return (
        <div className="app">
            {/* 商品列表项 */}
            {goodsList.map((item) => (
                <GoodsItem key={item.id} {...item} />
            ))}
        </div>
    );
}