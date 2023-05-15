import ReactDOM from 'react-dom';
import './index.css';

// 普通函数
function Header() {
    return <div>头部组件</div>;
}

// 箭头函数
const Footer = () => {
    return <div>底部组件</div>;
};

// 加载组件，不渲染内容
const Loading = () => {
    const loading = true;
    return loading ? <div>正在加载...</div> : null;
};

// 根组件
const App = () => {
    return (
        <>
            <Header />
            <Loading />
            <Footer />
        </>
    );
};



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(App());