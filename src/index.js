import ReactDOM from 'react-dom';
import './index.css';
import {render} from "@testing-library/react";
import {Component} from "react";
// 导入两个子组件
import Rose from './components/Rose';
import Jack from "./components/Jack";

// App 是父组件
class App extends Component {
    // 1. 状态提升到父组件
    state = {
        msg: '',
    };

    changeMsg = (msg) => {
        this.setState({ msg });
    };

    render() {
        return (
            <div>
                <h1>我是App组件</h1>
                {/* 兄弟组件 1 */}
                <Jack changeMsg={this.changeMsg}></Jack>
                {/* 兄弟组件 2 */}
                <Rose msg={this.state.msg}></Rose>
            </div>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App></App>);