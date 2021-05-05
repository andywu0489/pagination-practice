import {
    combineReducers
} from 'redux'
import itemReducer from './item/itemReducer.js'

const rootReducer = combineReducers({
    items: itemReducer
})

export default rootReducer