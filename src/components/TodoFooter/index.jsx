import { useSelector } from 'react-redux'

export const TodoFooter = () => {
    const leftCount = useSelector(
        state => state.todos.filter(item => !item.done).length
    )

    return (
        // ...
        <span className="todo-count">
      <strong>{leftCount}</strong> item left
    </span>
    )
}