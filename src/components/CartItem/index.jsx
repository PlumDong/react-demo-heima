import { CartCounter } from '../CartCounter'

export const CartItem = ({
                              goods_count,
                              goods_img,
                              goods_name,
                              goods_price,
                              goods_state,
                              id,
                              changeGoodsState,
                          }) => {


    return (
        <div className="my-goods-item">
            <div className="left">
                <div className="custom-control custom-checkbox">
                    <input
                        id={`input-${id}`}
                        type="checkbox"
                        className="custom-control-input"
                        checked={goods_state}
                        onChange={(e) => changeGoodsState(id, e.target.checked)}
                    />
                    <label className="custom-control-label" htmlFor={`input-${id}`}>
                        <img src={goods_img} alt="" />
                    </label>
                </div>
            </div>
            <div className="right">
                <div className="top">{goods_name}</div>
                <div className="bottom">
                    <span className="price">¥ {goods_price}</span>
                    <CartCounter id={id} goods_count={goods_count} />
                </div>
            </div>
        </div>
    );
};