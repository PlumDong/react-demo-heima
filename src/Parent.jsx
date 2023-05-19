import Child from './Child';
const Parent = () => {
    return (
        <div className="parent">
            <h3>父组件：</h3>
            <hr />
            <Child />
        </div>
    );
};

export default Parent;