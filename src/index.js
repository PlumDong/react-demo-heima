import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import ReactDOM from 'react-dom'
import './index.scss'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)