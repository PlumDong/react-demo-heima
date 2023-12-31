import App from './App'
import ReactDOM from 'react-dom'
import './index.scss'
import {Provider} from "react-redux";
import store from './store'


ReactDOM.render(
    <Provider store={store}>

    <App />
    </Provider>

    ,document.querySelector('#root')
)