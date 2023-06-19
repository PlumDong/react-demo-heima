import axios from 'axios'
import {setToken} from "@/utils";

export const login = (mobile, code) => {
    return async dispatch => {
        const res = await axios.post('http://geek.itheima.net/v1_0/authorizations', {
            mobile,
            code
        })
        if (res.data.data){
            throw new Error('登陆失败！')
        }
        // 注意：此处获取的是 token
        const { token } = res.data.data
        setToken(token)
        dispatch({ type: 'login/setToken', payload: token })
    }
}