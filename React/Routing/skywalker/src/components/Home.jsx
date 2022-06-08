import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [formData, setFormData] = useState({'type': 'people', 'id': 1})
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${formData.type}/${formData.id}`)
        setFormData({'type': 'people', 'id': 1})
    }
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }



    return (
        <div className='bg-light'>
            <form onSubmit={handleSubmit} className='text-dark d-flex justify-content-center align-items-center'>
                <p className='mt-3 me-2'>Search for:</p>
                <select name="type" onChange={handleChange} value={formData.type} >
                    <option value='people'>People</option>
                    <option value='planets'>Planets</option>
                </select>
                <p className='mt-3 ms-3'>id:</p>
                <input className='ms-1' name='id' type="text" onChange={handleChange} value={formData.id}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Home