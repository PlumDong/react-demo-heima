import { combineReducers } from 'redux'

import { channels } from './channels'
import { articles } from './articles'

const rootReducer = combineReducers({
    channels,
    articles
})

export default rootReducer