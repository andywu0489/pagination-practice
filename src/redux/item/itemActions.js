import {
    ADD_ITEM
} from './itemTypes'

export const addItem = (item) => {
    item.name = item.name.trim()
    item.brand = item.brand.trim()
    item.description = item.description.trim()
    return {
        type: ADD_ITEM,
        payload: item
    }
}