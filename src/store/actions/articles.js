import axios from 'axios'
import * as types from '../actionTypes/articles'

export const getArticles = id => {
    return async dispatch => {
        const res = await axios.get(
            `http://toutiao.itheima.net/v1_0/articles?channel_id=${id}&timestamp=${Date.now()}`
        )

        dispatch({
            type: types.GET_ARTICLES,
            payload: res.data.data.results
        })
    }
}