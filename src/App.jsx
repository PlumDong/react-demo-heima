import axios from 'axios';
import {useEffect, useState} from 'react';
import {GoodsItem} from "./components/GoodsItem";
import CartFooter from "./components/CartFooter";

const http = axios.create({
    baseURL: 'http://localhost:8888',
});

export default function App() {
    const [checkAll, setCheckAll] = useState(false);
    const changeCheckAll = (checkAll) => {
        setCheckAll(checkAll);

        // 本地数据状态修改
        setGoodsList(
            goodsList.map((item) => {
                return {
                    ...item,
                    goods_state: checkAll,
                };
            }),
        );

        // 接口数据状态修改
        goodsList.forEach((item) =>
            http.patch(`/goodsList/${item.id}`, {
                goods_state: checkAll,
            }),
        );
    };
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
        const loadData = async () => {
            const res = await http.get('/goodsList');
            const list = res.data;
            setGoodsList(list);

            setCheckAll(list.every((item) => item.goods_state));
        };
        loadData();
    }, []);


    return (
        <div className="app">
            {/* 商品列表项 */}
            {goodsList.map((item) => (
                <GoodsItem
                    key={item.id}
                    {...item}
                    changeGoodsState={changeGoodsState}
                />
            ))}
            <CartFooter checkAll={checkAll} changeCheckAll={changeCheckAll} />

        </div>
    );
}