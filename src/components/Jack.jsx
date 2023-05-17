import React, { Component } from 'react';

export default class Jack extends Component {
    state = {
        b: true,
    };

    say = () => {
        // 修改数据
        this.props.changeMsg(this.state.b?'you jump i look':'');
        this.setState({b:!this.state.b});
    };
    render() {
        return (
            <div>
                <h3>我是Jack组件</h3>
                <button onClick={this.say}>说</button>
            </div>
        );
    }
}