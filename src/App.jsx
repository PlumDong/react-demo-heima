import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const First = () => <p>页面一的页面内容</p>
const Tow = () => <p>页面二的页面内容</p>
const All = () => <p>没有路由的页面内容</p>

const App = () => {
    return (
        <Router>
            <div className="App">
                <ul>
                    <li>
                        {/*
                        to属性：浏览器地址栏中的pathname（location.pathname）
                            */}
                        <Link to="/first">页面一</Link>
                        <Link to="/tow">页面二</Link>
                    </li>
                </ul>

                {/*
                  path属性：路由规则
                  component属性：展示的组件
                  Route 组件写在哪，渲染出来的组件就展示在哪
                */}
                <Route path="/first"><First></First></Route>
                <Route path="/tow" component={Tow}></Route>
                <Route component={All}></Route>
            </div>
        </Router>
    )
}
export default App;