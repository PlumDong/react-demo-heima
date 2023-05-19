import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types'

const Demo = (props) => {
    return <div>Demo组件</div>
}
Demo.propTypes = {
    // 常见类型
    optionalFunc: PropTypes.func,
    // 常见类型+必填
    requiredFunc: PropTypes.func.isRequired,
    // 特定结构的对象
    optionalObjectWithShape: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number
    })
}
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(Demo({}));
