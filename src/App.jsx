import React, {Component} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import axios from "axios";

export default class App extends Component {
    state = {
        list: [],
    };
    componentDidMount() {
        this.getTodoList()
    }

    getTodoList = async () => {
        const res = await axios.get("http://localhost:5000/todos");
        this.setState({list: res.data});
    }

    render() {
        return (
            <section className="todoapp">
                <Header getTodoList={this.getTodoList}/>
                <Main list={this.state.list} getTodoList={this.getTodoList} />
                <Footer/>
            </section>
        );
    }

}