import './index.scss';
const CartFooter = () => {
    return (
        <div className="cart-footer">
            11
            <div className="custom-control custom-checkbox">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id="footerCheck"
                />
                <label className="custom-control-label" htmlFor="footerCheck">
                    全选
                </label>
            </div>
            <div>
                <span>合计:</span>
                <span className="price">¥ 100</span>
            </div>
            <button type="button" className="footer-btn btn btn-primary">
                结算 (0)
            </button>
        </div>
    );
};

export default CartFooter;