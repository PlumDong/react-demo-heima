const initialState = {
    token: localStorage.getItem('geek-pc-token') || ''
}
export const user = (state = initialState, action) => {
    switch (action.type) {
        case 'user/setToken':
            return {
                ...state,
                token: action.payload
            }
        default:
            return state
    }
}