// 导入创建好的 action type
import * as types from '../actionTypes/todos'

// 删除任务
export const delTodo = id => ({
    type: types.DEL_TODO,
    payload: id
})
// 切换任务

export const toggleTodo = id => ({
    type: types.TOGGLE_TODO,
    payload: id
})