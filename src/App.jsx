import React, {Component} from 'react'
export default class Demo extends Component {
    state = {
        count: 0
    }
    handleClick = () => {
        // this.setState({count: this.state.count+1})
        // this.setState({count: this.state.count+1})
        // 页面展示 1
        this.setState(prevState=>{
            return {
                count: prevState.count + 1
            }
        })
        this.setState(prevState=>{
            return {
                count: prevState.count + 1
            }
        })

        this.setState(prevState=>{
            return {
                count: prevState.count + 1
            }
        })
        // 页面展示 3
    }
    render() {
        return (
            <div>
                <div>Demo组件：{this.state.count}</div>
                <button onClick={this.handleClick}>setState串联更新数据</button>
            </div>
        )
    }
}