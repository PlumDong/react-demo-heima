import axios from 'axios'
import {setToken, http} from "@/utils";

export const login = (mobile, code) => {
    return async dispatch => {
        const data = await http.post('/authorizations', {
            mobile,
            code
        })
        console.log(data)
        // 注意：此处获取的是 token
        const { token } = data

        setToken(token)
        dispatch({ type: 'login/setToken', payload: token })
    }
}
