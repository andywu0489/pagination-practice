import {
    INCREMENT_COUNT,
    DECREMENT_COUNT,
    ADD_ITEM
} from './itemTypes'

const initialState = {
    // count: 1,
    items: []
}

const itemReducer = (state = initialState, action) => {
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
                case ADD_ITEM:
                    return {
                        ...state,
                        items: [...state.items, action.payload]
                    }

                    default:
                        return state
    }
}

export default itemReducer