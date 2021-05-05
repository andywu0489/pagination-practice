import React, { useState } from "react";
import "./pagination.css";
import _ from "lodash";
import {useSelector} from 'react-redux'

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [number, setNumber] = useState(currentPage);
  const [numPerPage, settNumPerPage] = useState(25);
  const [orderByValue, setOrderByValue] = useState("newest");
  const [filterValue, setFilterValue] = useState("none");

  let items = useSelector(state => state.items.items)

  //order by
  if (orderByValue === "newest") {
    items.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
  } else if (orderByValue === "oldest") {
    items.sort((a, b) => {
      return a.createdAt - b.createdAt;
    });
  } else if (orderByValue === "priceDecending") {
    items.sort((a, b) => {
      return b.price - a.price;
    });
  } else if (orderByValue === "priceAccending") {
    items.sort((a, b) => {
      return a.price - b.price;
    });
  }


  //filter by brand
  if (filterValue && filterValue !== 'none') {
    items = items.filter((item) => {
      return item.brand === filterValue;
    });
  }

  const chunkedArr = _.chunk(items, numPerPage);

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
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="priceAccending">Price: Low to high</option>
            <option value="priceDecending">Price: High to low</option>
          </select>
        </span>
        <span>
          {"Filter By Brand: "}
          <select onChange={handleFilterValueChange} value={filterValue}>
            <option value="none">---</option>
            <option value="Honda">Honda</option>
            <option value="Toyota">Toyota</option>
            <option value="Tesla">Tesla</option>
            <option value="Subaru">Subaru</option>
            <option value="Hyundai">Hyundai</option>
          </select>
        </span>
      </div>
      <div className="pagination__list">
        {currentPageArray && currentPageArray.length > 0 ? (
          currentPageArray.map((item) => {
            return (
              <div className="pagination__list-item" key={item.createdAt}>
                <p>Name: {item.name}</p>
                <p>Brand: {item.brand}</p>
                <p>Description: {item.description}</p>
                <p>Price: ${item.price}</p>
              </div>
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
