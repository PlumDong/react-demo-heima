const TOKEN_KEY = 'itcast_geek_pc'

// 获取token
const getToken = () => localStorage.getItem(TOKEN_KEY)
// 存储token
const setToken = token => localStorage.setItem(TOKEN_KEY, token)
// 清除token
const clearToken = () => localStorage.removeItem(TOKEN_KEY)

export { getToken, setToken, clearToken }