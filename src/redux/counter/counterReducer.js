import {
    INCREMENT_COUNT,
    DECREMENT_COUNT
} from './counterTypes'

const initialState = {
    count: 1
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + action.payload
            }
            case DECREMENT_COUNT:
                return {
                    ...state,
                    count: state.count - action.payload
                }
        
        default: return state
    }
}

export default counterReducer