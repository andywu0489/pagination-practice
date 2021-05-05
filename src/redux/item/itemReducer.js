import {
    ADD_ITEM
} from './itemTypes'

import testData from '../../testData'

const initialState = {
    items: [...testData]
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
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