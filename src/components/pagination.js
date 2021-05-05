import React, { useState } from "react";
import "./pagination.css";
import _ from "lodash";
import {useSelector} from 'react-redux'

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [number, setNumber] = useState(currentPage);
  const [numPerPage, settNumPerPage] = useState(25);
  const [orderByValue, setOrderByValue] = useState("accending");
  const [filterValue, setFilterValue] = useState("none");

  const items = useSelector(state => state.items.items)

  console.log('items', items)

  let arr = [];

    for (let i = 1; i <= 1000000; i++) {
      arr.push(i);
    }

  if (orderByValue === "accending") {
    arr.sort((a, b) => {
      return a - b;
    });
  } else if (orderByValue === "decending") {
    arr.sort((a, b) => {
      return b - a;
    });
  }

  if (filterValue === "even") {
    arr = arr.filter((num) => {
      return num % 2 === 0;
    });
  } else if (filterValue === "odd") {
    arr = arr.filter((num) => {
      return num % 2 !== 0;
    });
  }

  const chunkedArr = _.chunk(arr, numPerPage);

  const currentPageArray = chunkedArr[currentPage - 1];

  const decrement = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setNumber(currentPage - 1);
    }
  };

  const increment = () => {
    if (currentPage < chunkedArr.length) {
      setCurrentPage(currentPage + 1);
      setNumber(currentPage + 1);
    }
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter" && number <= chunkedArr.length && number > 0) {
      setCurrentPage(number);
      setNumber(number);
    }
  };

  const handleChange = (e) => {
    setNumber(parseInt(e.target.value, 10));
  };

  const handleNumPerPageChange = (e) => {
    settNumPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
    setNumber(1);
  };

  const handleOrderByChange = (e) => {
    setOrderByValue(e.target.value);
    setCurrentPage(1);
    setNumber(1);
  };

  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
    setCurrentPage(1);
    setNumber(1);
  };

  return (
    <div className="pagination__container">
      <div className="pagination__settings">
        <span>
          {"Items Per Page: "}
          <select onChange={handleNumPerPageChange} value={numPerPage}>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </span>
        <span>
          {"Order By: "}
          <select onChange={handleOrderByChange} value={orderByValue}>
            <option value="accending">Accending</option>
            <option value="decending">Decending</option>
          </select>
        </span>
        <span>
          {"Filter By: "}
          <select onChange={handleFilterValueChange} value={filterValue}>
            <option value="none">---</option>
            <option value="even">Even</option>
            <option value="odd">Odd</option>
          </select>
        </span>
      </div>
      <div className="pagination__list">
        {currentPageArray && currentPageArray.length > 0 ? (
          currentPageArray.map((number) => {
            return (
              <p className="pagination__list-item" key={number}>
                {number}
              </p>
            );
          })
        ) : (
          <p className="pagination__list-item">
            Nothing to see here
          </p>
        )}
      </div>
      <div className="pagination__controls">
        <button className="pagination__decrement-button" onClick={decrement}>
          -
        </button>
        <span>
          <input
            className="pagination__page-input"
            type="number"
            name="currentPage"
            value={number}
            onKeyDown={handleOnKeyDown}
            onChange={handleChange}
          ></input>
          {`/${chunkedArr.length > 0 ? chunkedArr.length : 1}`}
        </span>
        <button className="pagination__increment-button" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
