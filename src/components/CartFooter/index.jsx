import './index.scss';
export const CartFooter = ({ checkAll, changeCheckAll }) => {
    return (
        <div className="my-footer">
            <div className="custom-control custom-checkbox">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id="footerCheck"
                    checked={checkAll}
                    onChange={(e) => changeCheckAll(e.target.checked)}
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