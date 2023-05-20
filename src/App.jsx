import React, {Component} from 'react'
export default class Demo extends Component {
    state = {
        count: 0
    }
    handleClick = () => {
        this.setState(prevState=>{
            return {
                count: prevState.count + 1
            }
        },()=>{
            console.log('更新后1：', this.state.count)  // 打印：1
        })
        this.setState(prevState=>{
            return {
                count: prevState.count + 1
            }
        },()=>{
            console.log('更新后2：', this.state.count)  // 打印：1
        })
        this.setState(prevState=>{
            return {
                count: prevState.count + 1
            }
        },()=>{
            console.log('更新后3：', this.state.count)  // 打印：1
        })
        console.log('未更新：', this.state.count)  // 打印：0
    }
    render() {
        console.log("渲染页面")
        return (
            <div>
                <div>Demo组件：{this.state.count}</div>
                <button onClick={this.handleClick}>setState更新后执行逻辑</button>
            </div>
        )
    }
}