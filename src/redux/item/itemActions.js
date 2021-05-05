import {
    INCREMENT_COUNT,
    DECREMENT_COUNT,
    ADD_ITEM
} from './itemTypes'

export const incrementCount = (number = 1) => {
    return {
        type: INCREMENT_COUNT,
        payload: number
    }
}

export const decrementCount = (number = 1) => {
    return {
        type: DECREMENT_COUNT,
        payload: number
    }
}

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}