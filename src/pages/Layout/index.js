import { Layout, Menu, Popconfirm, Button } from "antd";
import"./index.scss";
import { LogoutOutlined } from "@ant-design/icons";
import {Link} from "react-router-dom";

const { Header, Sider, Content } = Layout;

const GeekLayout = () => {
    const items = [
        { label: <Link to="/home/dashboard">数据面板</Link>,key: "/home/dashboard"},
        { label: <Link to="/home/article">内容管理</Link>, key: "/home/article" },
        { label: <Link to="/home/publish">发布文章</Link>, key: "/home/publish" },
    ]
    return (
        <Layout className='geek-layout'>
            <Sider width={148}>
                <div className="logo">GEEK</div>
                <Menu defaultSelectedKeys={['1']} mode="inline" theme="dark" items={items}></Menu>
            </Sider>
            <Layout>
                <Header>
                    <span style={{ fontSize: 16 }}>极客园自媒体端</span>
                    <div>
                        <span>{name}</span>
                        <Popconfirm
                            placement="bottomRight"
                            title="您确认退出极客园自媒体端吗？"
                            okText="确认"
                            cancelText="取消"
                        >
                            <Button type="link" icon={<LogoutOutlined />}>
                                退出
                            </Button>
                        </Popconfirm>
                    </div>
                </Header>
                <Content>
                    内容
                </Content>
            </Layout>
        </Layout>
    );
};

export default GeekLayout;
