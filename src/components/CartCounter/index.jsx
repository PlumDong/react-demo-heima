import './index.scss'
import {useContext} from "react";
import Context from "../../context";

export const CartCounter = ({id, goods_count}) => {
    const {onChangeGoodsCount} = useContext(Context);
    return (
        <div className="my-counter">
            <button type="button" className="btn btn-light"
                    onClick={() => onChangeGoodsCount(id, goods_count - 1)}>
                -
            </button>
            <input type="number" className="form-control inp" value={goods_count}
                   onChange={(e) => onChangeGoodsCount(id, +e.target.value)}
            />
            <button type="button" className="btn btn-light"
                    onClick={() => onChangeGoodsCount(id, goods_count + 1)}>
                +
            </button>
        </div>
    )
}