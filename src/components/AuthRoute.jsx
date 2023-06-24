import { Route, Redirect } from 'react-router-dom'
import { getToken } from '@/utils'

const AuthRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                // 判断是否登录
                if (!getToken()) {
                    // 未登录
                    return (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: props.location.pathname }
                            }}
                        />
                    )
                }
                return <component />
            }}
        />
    )
}

export { AuthRoute }
