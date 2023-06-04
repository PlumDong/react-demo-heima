import { toggleTodo } from '../../store/actions/todos'
import { useDispatch } from 'react-redux'

export const TodoItem = ({ id, text, done }) => {
    const dispatch = useDispatch()

    return (
        // ...
        <input
            className="toggle"
            type="checkbox"
            checked={done}
            onChange={() => dispatch(toggleTodo(id))}
        />
    )
}