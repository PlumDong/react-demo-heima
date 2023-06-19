import {getToken} from "@/utils";

const initialState = {
    token: getToken() || ''
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