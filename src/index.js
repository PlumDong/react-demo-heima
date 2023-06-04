import { Provider } from 'react-redux'
import store from './store'
import App from './App'

// eslint-disable-next-line no-undef
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('#root')
)