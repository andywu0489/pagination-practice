import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {incrementCount, decrementCount} from '../redux/counter/counterActions'

export default function Counter () {
    const count = useSelector(state => state.count.count) 
    console.log(count)

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(incrementCount())
    }

    const handleDecrement = () => {
        dispatch(decrementCount())
    }

    return(
        <div>
            <button onClick={() => handleIncrement()}>Increment</button>
            <button onClick={() => handleDecrement()}>Decrement</button>
            <p>{count}</p>
        </div>
    )
}