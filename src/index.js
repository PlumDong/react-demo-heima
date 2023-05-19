import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import PropTypes from 'prop-types'

const List = props => {
    const arr = props.colors
    const lis = arr.map((item, index) => <li key={index}>{item.name}</li>)
    return <ul>{lis}</ul>
}

List.propTypes = {
    // props属性：校验规则
    colors: PropTypes.array
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(List({colors:[{name:"张三"},{name:"李四"}]}));
