import React, { useContext } from 'react'

import { Wrapper } from '../context/WrapperContext'


const Form = () => {
    const { setName } = useContext(Wrapper)
    return (
        <div>
            <input type="text" onChange={e => setName(e.target.value)} />
        </div>
    )
}

export default Form