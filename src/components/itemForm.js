import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
      [e.target.name]: e.target.value.trimStart()
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
        <input name="name" required value={item.name} onChange={handleChange}></input>
        </label>
        <label>{'Brand: '} 
        <input name="brand" required value={item.brand} onChange={handleChange}></input>
        </label>
        <label>{'Description: '}
        <input name="description" required value={item.description} onChange={handleChange}></input>
        </label>
        <label>{'Price: $'}
        <input type='number' name="price" required value={item.price} onChange={handleChange}></input>
        </label>
        <button>Submit</button>
      </form>
  );
}
