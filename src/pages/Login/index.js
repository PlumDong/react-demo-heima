import logo from '../../assets/logo.png'
import './index.scss'

const Login = () => {
    return (
        <div className="login">
            <div className="login-container">
                <img className="login-logo" src={logo} alt="" />
                {/* 登录表单 */}
            </div>
        </div>
    )
}

export default Login