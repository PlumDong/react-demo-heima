import ReactDOM from 'react-dom';
import './index.css';
import {render} from "@testing-library/react";

function App() {
    return (<div className="parent">
            <h1>今日要闻</h1>
            <div className="child">
                <h3>坚定不移走中国特色社会主义法治道路</h3>
                <div className="detail">
                    <span>新华社</span>
                    <span>774点赞</span>
                </div>
            </div>
            <div className="child">
                <h3>2021年度法治人物——倪伯苍 </h3>
                <div className="detail">
                    <span>央视网</span>
                    <span>774点赞</span>
                </div>
            </div>
            <div className="child">
                <h3>岁末年终 愿这份“温良”伴你乘风破浪 </h3>
                <div className="detail">
                    <span>央视新闻客户端</span>
                    <span>248点赞</span>
                </div>
            </div>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App>

</App>);