import ReactDOM from 'react-dom';
import './index.css';
// 定义组件 props包含{name:'jack',age:'20'}
function Hello(props) {
    return <div>接收到数据: {props.name}  {props.age}</div>;
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Hello name="jack" age="20" />);