import React, {useState} from 'react'
import './pagination.css'

export default function Pagination () {
    const [currentPage, setCurrentPage] = useState(1)
    const [number, setNumber] = useState(currentPage)
    const [numPerPage, settNumPerPage] = useState(5)
    const [orderByValue, setOrderByValue] = useState('accending')

    const arr = []

    for (let i = 1; i <= 100; i++) {
        arr.push(i)
    }

    if (orderByValue === 'accending') {
        arr.sort((a, b) => {
           return a - b
        })
    } else if (orderByValue === 'decending') {
        arr.sort((a, b) => {
            return b - a
         })
    }

    const splicedArr = []

    while (arr.length > 0) {
        splicedArr.push(arr.splice(0, numPerPage))
    }

    const currentPageArray = splicedArr[currentPage - 1]

    const decrement = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            setNumber(currentPage - 1)
        }
    }

    const increment = () => {
        if (currentPage < splicedArr.length) {
            setCurrentPage(currentPage + 1)
            setNumber(currentPage + 1)
        }
    }

    const handleOnKeyDown = (e) => {
        if (e.key === 'Enter' && number <= splicedArr.length && number > 0) {
            setCurrentPage(number)
            setNumber(number)
        }
    }

    const handleChange = (e) => {
        setNumber(parseInt(e.target.value, 10))
    }

    const handleNumPerPageChange = (e) => {
        settNumPerPage(parseInt(e.target.value, 10))
        setCurrentPage(1)
        setNumber(1)
    }

    const handleOrderByChange = (e) => {
        setOrderByValue(e.target.value)
        setCurrentPage(1)
        setNumber(1)
    }

    return(
        <div className='pagination__container'>
            <div className='pagination__settings'>
            <span>{'Items Per Page: '}
                <select onChange={handleNumPerPageChange} value={numPerPage}>
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                </select>
            </span>
            <span>{'Order By: '}
                <select onChange={handleOrderByChange} value={orderByValue}>
                    <option value='accending'>Accending</option>
                    <option value='decending'>Decending</option>
                </select>
            </span>
            </div>
            <div className='pagination__list'>
                {currentPageArray && currentPageArray.map(number => {
                    return (
                        <p className='pagination__list-item'key={number}>{number}</p>
                    )
                })
                }
            </div>
            <div className='pagination__controls'>
                <button className='pagination__decrement-button' onClick={decrement}>-</button>
                <span>
                    <input className='pagination__page-input'
                        type='number'
                        name='currentPage'
                        value={number}
                        onKeyDown={handleOnKeyDown}
                        onChange={handleChange}
                    ></input>
                    {`/${splicedArr.length}`}
                </span>
                <button className='pagination__increment-button'onClick={increment}>+</button>
            </div>
        </div>
    )
}