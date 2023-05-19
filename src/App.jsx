import {Component} from 'react';
import CommentInput from "./components/CommentInput";
import CommentList from "./components/CommentList";
import CommentHead from "./components/CommentHead";

export default class App extends Component {
    state = {
        // 用户信息
        user: {
            name: '清风徐来',
            avatar: 'https://static.youku.com/lvip/img/avatar/310/6.png',
            vip: true,
        },
        // 评论列表
        comments: [
            {
                id: 100,
                name: '__RichMan',
                avatar: 'https://r1.ykimg.com/051000005BB36AF28B6EE4050F0E3BA6',
                content:
                    '这阵容我喜欢😍靳东&闫妮，就这俩名字，我就知道是良心剧集...锁了🔒',
                time: new Date('2021/10/12 10:10:23'),
                vip: true,
                collect: false,
            },
            {
                id: 102,
                name: '清风徐来',
                avatar: 'https://static.youku.com/lvip/img/avatar/310/6.png',
                content:
                    '第一集看的有点费力，投入不了，闫妮不太适合啊，职场的人哪有那么多表情，一点职场的感觉都没有',
                time: new Date('2021/07/01 00:30:51'),
                vip: true,
                collect: false,
            },
            {
                id: 101,
                name: '糖蜜甜筒颖',
                avatar:
                    'https://image.9xsecndns.cn/image/uicon/712b2bbec5b58d6066aff202c9402abc3370674052733b.jpg',
                content:
                    '突围神仙阵容 人民的名义第三部来了 靳东陈晓闫妮秦岚等众多优秀演员实力派 守护人民的财产 再现国家企业发展历程',
                time: new Date('2021/09/23 15:12:44'),
                vip: false,
                collect: true,
            },
        ],
        active: 'default',
    };
    setActive = value => {
        // 改变过排序修改状态
        if (value !== this.state.active) {
            this.setState({active: value})
        }
    }

    render() {
        const {user, comments, active} = this.state
        return (
            <div className="comments">
                {/* 输入框组件 */}
                <CommentInput/>
                {/* 标题排序组件 */}
                <CommentHead active={active} setActive={this.setActive} comments={comments} />
                {/* 列表组件 */}
                {/*<CommentList />*/}
                <CommentList user={user} comments={comments} active={active}/>
            </div>
        )
    }
}
