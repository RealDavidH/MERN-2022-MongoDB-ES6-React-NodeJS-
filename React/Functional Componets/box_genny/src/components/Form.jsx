import React, { useState } from 'react'
import Box from './Box'

const Form = () => {
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const [boxes, addBox] = useState([])
    const [submit, setSubmit] = useState(false)
    const makeBox = (e) => {
        e.preventDefault();
        addBox([...boxes, {color: color, size: parseInt(size)}])
    }
    return (
        <div>
            <p>Make a Box:</p>
            <div className="d-flex">
                <form className="d-flex flex-column" onSubmit={makeBox}>
                    <p>Pick Color:</p>
                    <input type="text" onChange={(e) => setColor(e.target.value)} value={color} />
                    <p>Pick Size:</p>
                    <input min={0} type="number" onChange={(e) => setSize(e.target.value)} value={size} />
                    <input type="submit" value="Make Box" />
                </form>
            </div>
            <Box boxes={ boxes } />
        </div>
    )
}

export default Form