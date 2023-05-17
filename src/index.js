import ReactDOM from 'react-dom';
import './index.css';

import {Component} from 'react';


// 头部
class Header extends Component {
    render() {
        return <>头部组件</>;
    }
}

// 根组件
class App extends Component {
    render() {
        return (
            <>
                <Header/>
            </>
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App></App>);