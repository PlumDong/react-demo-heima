import ReactDOM from 'react-dom';
import './index.css';
import {Component} from "react";

class Demo extends Component {
    constructor () {
        super()
        console.log('1. constructor执行')
    }
    componentDidMount () {
        console.log('3. componentDidMount执行')
    }
    render() {

        console.log('2. render执行')
        return <div>{'sss' ?? 'App组件'}</div>
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Demo />);
