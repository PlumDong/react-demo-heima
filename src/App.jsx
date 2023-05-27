import React, { useState } from "react";
import Context from "./context";
import Child from './Child'

const App = () => {
    const [count, setCount] = useState(0)
    return (
        <Context.Provider value={count}>
            <div className="app">
                根组件：{count} <button onClick={() => setCount(count + 1)}>打豆豆</button>
                <hr />
                <Child />
            </div>
        </Context.Provider>
    );
};
export default App;