import React from 'react'

const Box = (props) => {
    return (
        <div className='d-flex flex-row flex-wrap'>
            {
                props.boxes.map((box, i) => {
                    return (
                        <p key={i} style={{ backgroundColor: box.color, width: box.size, height: box.size, marginLeft: 10 }} ></p>
                    )
                })
            }
        </div>
    )
}

export default Box;