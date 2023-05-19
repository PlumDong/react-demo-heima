import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
// 定义组件
const Hello = (props) => {
    return <div>该组件的子节点：{props.children}</div>;
};
// 使用组件


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Hello>我是子节点</Hello>);