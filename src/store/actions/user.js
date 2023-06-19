import axios from 'axios'

export const login = (mobile, code) => {
    return async dispatch => {
        const res = await axios.post('http://geek.itheima.net/v1_0/authorizations', {
            mobile,
            code
        })

        // 注意：此处获取的是 token
        const { token } = res.data.data
        localStorage.setItem('geek-pc-token', token)
        dispatch({ type: 'login/setToken', payload: token })
    }
}