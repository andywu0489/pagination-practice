import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './itemForm.css'
import {
  addItem
} from "../redux/item/itemActions";

export default function ItemForm() {
const [item, setItem] = useState({
    name: '',
    brand: '',
    description: '',
    price: '',
    createdAt: ''
})

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    })
  }

  const initialItemState = {
    name: '',
    brand: '',
    description: '',
    price: '',
    createdAt: ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    item.createdAt = Date.now()
    dispatch(addItem(item))
    setItem({...initialItemState})
  }

  return (
      <form className='item-form' onSubmit={handleSubmit}>
        <label>{'Name: '} 
        <input name="name" value={item.name} onChange={handleChange}></input>
        </label>
        <label>{'Brand: '} 
        <input name="brand" value={item.brand} onChange={handleChange}></input>
        </label>
        <label>{'Description: '}
        <input name="description" value={item.description} onChange={handleChange}></input>
        </label>
        <label>{'Price: $'}
        <input type='number' name="price" value={item.price} onChange={handleChange}></input>
        </label>
        <button>Submit</button>
      </form>
  );
}
