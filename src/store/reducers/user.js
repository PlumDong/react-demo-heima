// 登录功能，只需要存储 token 即可，所以，状态默认值为：''
const initialState = {
    token: ''
}

const user = (state = initialState, action) => {
    return state
}

export default user