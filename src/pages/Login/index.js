import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
    return (
        <Form size="large">
            <Form.Item>
                <Input prefix={<UserOutlined />} placeholder="请输入手机号" />
            </Form.Item>
            <Form.Item>
                <Input prefix={<LockOutlined />} placeholder="请输入验证码" />
            </Form.Item>
            <Form.Item>
                <Checkbox>我已阅读并同意「用户协议」和「隐私条款」</Checkbox>
            </Form.Item>
            <Form.Item>
                <Button type="primary" block>
                    登录
                </Button>
            </Form.Item>
        </Form>
    )
}
export default Login;