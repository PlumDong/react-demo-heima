import PropTypes from 'prop-types'
const Main = (props) => {
    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {props.list.map((item) => (
                    <li key={item.id} className={item.done ? "completed" : ""}>
                        <div className="view">
                            <input className="toggle" type="checkbox" checked={item.done} onChange={()=>{}} />
                            <label>{item.name}</label>
                            <button className="destroy"></button>
                        </div>
                        <input className="edit"/>
                    </li>
                ))}
            </ul>
        </section>
    );
};
Main.propTypes = {
    list: PropTypes.array
}

export default Main;