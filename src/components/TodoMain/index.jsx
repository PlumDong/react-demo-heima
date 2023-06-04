import { useSelector } from 'react-redux'
import {TodoItem} from "../TodoItem";

export const TodoMain = () => {
    const list = useSelector(state => state.todos)

    return (
        // ...
        <ul className="todo-list">
            {list.map(item => (
                <TodoItem key={item.id} {...item} />
            ))}
        </ul>
    )
}