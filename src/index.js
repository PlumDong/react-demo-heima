import ReactDOM from 'react-dom';
import './index.css';
import {Component} from "react";

function Child(props) {
    return (
        <div>
            <h3>子组件：{props.money}</h3>
        </div>
    );
}
class Parent extends Component {
    state = {
        money: 10000,
    };
    render() {
        return (
            <div>
                <h1>父组件：{this.state.money}</h1>
                <Child money={this.state.money} />
            </div>
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <Parent>

    </Parent>
);