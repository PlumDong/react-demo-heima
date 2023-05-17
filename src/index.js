import ReactDOM from 'react-dom';
import './index.css';
import {render} from "@testing-library/react";
import {Component} from "react";
class Parent extends Component {
    state = {
        money: 10000,
    };
    // 回调函数
    buyPhone = (price) => {
        this.setState({
            money: this.state.money - price,
        });
    };
    render() {
        const { money } = this.state;
        return (
            <div>
                <h1>父组件：{money}</h1>
                <Child money={money} buyPhone={this.buyPhone} />
            </div>
        );
    }
}
const Child = (props) => {
    const handleClick = () => {
        // 子组件调用父组件传递过来的回调函数
        props.buyPhone(5000);
    };
    return (
        <div>
            <h3>子组件：{props.money}</h3>
            <button onClick={handleClick}>买手机</button>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Parent></Parent>);