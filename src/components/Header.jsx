import React, { Component } from "react";
import axios from "axios";
import PropTypes from 'prop-types'

export default class Header extends Component {

    static propTypes = {
        getTodoList: PropTypes.func.isRequired
    }

    state = {
        todoName: "",
    };

    onChange = (e) => {
        this.setState({
            todoName: e.target.value,
        });
    };

    add = async (e) => {
        if (e.keyCode === 13) {
            const name = this.state.todoName.trim();
            if (name) {
                await axios.post("http://localhost:5000/todos", { name, done: false });
                this.setState({ todoName: "" });
                this.props.getTodoList();
            }
        }
    };

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    value={this.state.todoName}
                    onChange={this.onChange}
                    onKeyUp={this.add}
                />
            </header>
        );
    }
}