import * as types from '../actionTypes/todos'
// 默认值：
const initialState = [
    { id: 1, text: '吃饭', done: true },
    { id: 2, text: '学习', done: false },
    { id: 3, text: '睡觉', done: true }
]
export const todos = (state = initialState, action) => {
    switch (action.type) {
        // 处理删除任务
        case types.DEL_TODO:
            return state.filter(item => item.id !== action.payload)
        case types.TOGGLE_TODO:
            return state.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        done: !item.done
                    }
                }
                return item
            })
        default:
            return state
    }
}