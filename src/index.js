import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types'

// 分页组件
const Pagination = ({pageSize = 100}) => {
    return <div> pageSize的默认值：{pageSize}</div>
}

// 使用组件

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Pagination />);
