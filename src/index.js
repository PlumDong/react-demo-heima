import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import ReactDOM from 'react-dom'

// eslint-disable-next-line no-undef
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('#root')
)