import * as types from '../actionTypes/articles'

// 默认值：
const initialState = []

export const articles = (state = initialState, action) => {
    console.log('action = {}',action)
    console.log('state = {}',state)
    switch (action.type) {
        case types.GET_ARTICLES:
            return action.payload
        default:
            return state
    }
}