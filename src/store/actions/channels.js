import * as types from '../actionTypes/channels'
import axios from 'axios'

export const getChannels = () => {
    return async dispatch => {
        const res = await axios.get('http://toutiao.itheima.net/v1_0/channels')

        dispatch({
            type: types.GET_CHANNELS,
            payload: res.data.data.channels
        })
    }
}

export const changeActice = id => ({
    type: types.CHANGE_ACTIVE,
    payload: id
})