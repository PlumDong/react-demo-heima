export const GoodsItem = ({
                              goods_count,
                              goods_img,
                              goods_name,
                              goods_price,
                              goods_state,
                              id,
                          }) => {
    return (
        <div className="my-goods-item">
            <div className="left">
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id={`input-${id}`}
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
                    <span>counter组件</span>
                </div>
            </div>
        </div>
    );
};