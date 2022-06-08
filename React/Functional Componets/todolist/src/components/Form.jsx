import React, { useState } from 'react'
import Item from './Item'

const Form = () => {
    const [name, setName] = useState('')
    const [items, addItem] = useState([])
    const handleSubmit = (e) =>{
        e.preventDefault();
        addItem([...items, {name: name, checked: false}])
    }
    const newItems = (delItems) =>{
        addItem(delItems)
    }
    const check = (i) =>{
        !items[i].checked? items[i].checked = (true): items[i].checked = (false)
        addItem([...items])
    }

    return (
        <div className='d-flex flex-column'>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                <input type="submit" value="Add" className='btn btn-primary' />
            </form>
                <Item allitems = { items } onDelete = { newItems } checked = { check }/>
        </div>
    )
}

export default Form