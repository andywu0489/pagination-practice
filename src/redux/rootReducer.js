import {
    combineReducers
} from 'redux'
import counterReducer from './counter/counterReducer.js'

const rootReducer = combineReducers({
    count: counterReducer
})

export default rootReducer