import { MyContext } from './App'

const Child = () => {
    return (
        // 3. 通过Consumer来消费数据，value=>{ 这里使用数据 }
        <MyContext.Consumer>
            {(value) => (
                <div className="child">
                    <h5>子组件：{value.money} <button onClick={()=>value.updateMoney(5000)}>修改money</button></h5>
                </div>
            )}
        </MyContext.Consumer>
    );
};

export default Child;