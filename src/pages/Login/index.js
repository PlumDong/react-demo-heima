import {Form, Input, Button, Checkbox} from 'antd'
import {UserOutlined, LockOutlined} from "@ant-design/icons";
import './indexl.scss'
import logo from '../../assets/logo.png'

const Login = () => {
    const onFinish = values => {
        console.log(values)
    }

    return (
        <div className="login">
            <div className="login-container">
                <img className="login-logo" src={logo} alt=""/>
                <Form
                    onFinish={onFinish}
                    initialValues={{
                        mobile: '13911111111',
                        code: '246810',
                        isAgree: true
                    }}
                    size="large"
                    validateTrigger={["onChange", "onBlur"]}
                    autoComplete="off">
                    <Form.Item
                        name="mobile"
                        rules={[
                            {required: true, message: "请输入手机号"},
                            {
                                pattern: /^1\d{10}$/,
                                message: "手机格式不正确",
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined/>} placeholder="请输入手机号"></Input>
                    </Form.Item>
                    <Form.Item
                        name="code"
                        rules={[
                            {required: true, message: "请输入验证码"},
                            {len: 6, message: "验证码6个字符串"},
                        ]}
                    >
                        <Input prefix={<LockOutlined/>} placeholder="请输入验证码"></Input>
                    </Form.Item>
                    <Form.Item
                        name="isAgree"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) => {
                                    if (value === true) return Promise.resolve();
                                    else return Promise.reject(new Error("请勾选我已阅读并同意"));
                                },
                            },
                        ]}
                    >
                        <Checkbox>我已阅读并同意「用户协议」和「隐私条款」</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    )
}
export default Login;