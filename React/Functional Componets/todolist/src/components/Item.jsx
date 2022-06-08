import React, { useState } from 'react'

const Item = (props) => {
    const [check, setCheck] = useState(false) 
    const handleCheck = (i) =>{
        props.checked(i)
    }
    const handleDelete = (delIdx) =>{
        const filtered = props.allitems.filter((item, i) =>{
            return(
                i !== delIdx
            )
        })
        props.onDelete(filtered)
    }
    console.log(props.allitems)
    return (
        <div>
            <ul>
                {
                    props.allitems.map((items, i) => {
                        return (
                            <div key={i} className='d-flex flex-row justify-content-center mt-3'>
                                <li className={`p-2 ${items.checked&&"text-decoration-line-through"}`}>{items.name}</li>
                                <input className="p-2" type="checkbox" onChange={e => handleCheck(i, e)} checked={items.check}/>
                                <button className='btn btn-danger ms-2' onClick={e => handleDelete(i) }>Delete</button>
                            </div>
                        )
                    }
                    )
                }
            </ul>
        </div>
    )
}

export default Item