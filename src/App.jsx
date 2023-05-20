import React, {Component} from 'react'
export default class Demo extends Component {
    state = {
        count: 0
    }
    handleClick = () => {
        this.setState({count: this.state.count+100})
        this.setState({count: this.state.count+1})
        console.log(this.state.count)  // 打印0
    }
    render() {
        console.log('render')
        return (
            <div>
                <div>Demo组件：{this.state.count}</div>
                <button onClick={this.handleClick}>体现“异步”和合并</button>
            </div>
        )
    }
}