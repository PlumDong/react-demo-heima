import {Component, createContext} from 'react';
import Parent from "./Parent";

export const MyContext = createContext()

export default class App extends Component {
    state = {
        money: 10000
    }
    updateMoney = newMoney => {
        this.setState({
            money: newMoney
        })
    }

    render() {
        return (
            // 2. Provider包裹确定上下文生效范围，value注入范围内可用的数据
            <MyContext.Provider value={{
                money: this.state.money,
                updateMoney: this.updateMoney
            }}>
                <div className="app">
                    <h1>根组件：{this.state.money}</h1>
                    <hr/>
                    <Parent/>
                </div>
            </MyContext.Provider>
        )
    }
}