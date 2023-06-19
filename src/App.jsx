// 导入路由
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

// 导入页面组件
import Login from './pages/Login'
import Layout from './pages/Layout'

// 配置路由规则
function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/home" component={Layout}></Route>
                    <Redirect path="/" to="/login" />
                </Switch>
            </div>
        </Router>
    )
}

export default App