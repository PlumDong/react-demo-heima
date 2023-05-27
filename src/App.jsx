import { useRef, useEffect } from "react";

const App = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        // input DOM元素
        console.log(inputRef.current);
        // input 获取焦点
        console.log(inputRef.current.focus());
    }, []);

    return (
        <div className="app">
            根组件：
            <input type="text" ref={inputRef} />
        </div>
    );
};

export default App;