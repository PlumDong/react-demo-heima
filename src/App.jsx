import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const First = () => <p>页面一的页面内容</p>
const Tow = () => <p>页面二的页面内容</p>
const All = () => <p>没有路由的页面内容</p>
const Home = () => <p>首页</p>
const Login = () => <p>登录页</p>

const App = () => {
    return (
        <Router>
            <div className="App">
                <ul>
                    <li>
                        {/*
                        to属性：浏览器地址栏中的pathname（location.pathname）
                            */}
                        <Link to="/login">登录页面</Link>
                    </li>
                </ul>

                {/*
                  path属性：路由规则
                  component属性：展示的组件
                  Route 组件写在哪，渲染出来的组件就展示在哪
                  推荐：给默认路由（'/'）添加 exact 属性
                */}
                <Route exact  path="/" component={Home} />

                <Route path="/login" component={Login} />

            </div>
        </Router>
    )
}
export default App;