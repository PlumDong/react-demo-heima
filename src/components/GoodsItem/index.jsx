import './index.scss';
export const GoodsItem = () => {
    return (
        <div className="cart-goods-item">
            <div className="left">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="input" />
                    <label className="custom-control-label" htmlFor="input">
                        <img
                            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                            alt=""
                        />
                    </label>
                </div>
            </div>
            <div className="right">
                <div className="top">商品名称</div>
                <div className="bottom">
                    <span className="price">¥ 商品价格</span>
                    <span>counter组件</span>
                </div>
            </div>
        </div>
    );
};