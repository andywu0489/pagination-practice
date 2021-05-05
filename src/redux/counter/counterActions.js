import {
    INCREMENT_COUNT,
    DECREMENT_COUNT
} from './counterTypes'

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