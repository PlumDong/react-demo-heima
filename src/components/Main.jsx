import PropTypes from 'prop-types'
import axios from "axios";

const Main = (props) => {
    const updateDone = async (id, done) => {
        await axios.patch(`http://localhost:5000/todos/${id}`, {done});
        props.getTodoList()
    };
    const del = async (id) => {
        await axios.delete(`http://localhost:5000/todos/${id}`);
        props.getTodoList()
    }
    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {props.list.map((item) => (
                    <li key={item.id} className={item.done ? "completed" : ""}>
                        <div className="view">
                            <input className="toggle" type="checkbox"
                                   checked={item.done}
                                   onChange={() => updateDone(item.id, !item.done)}/>
                            <label>{item.name}</label>
                            <button className="destroy"
                                    onClick={()=>del(item.id)}></button>
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