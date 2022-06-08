import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Form(props) {
    const [player, setPlayer] = useState()
    const navigate = useNavigate()
    const [error, setError] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/create/player/`, player)
            .then(() => props.setIsList(true))
            .catch(err => {
                const err_Res = err.response.data.errors;
                const err_Arr = []
                for (const key of Object.keys(err_Res)) {
                    err_Arr.push(err_Res[key].message)
                }
                setError(err_Arr)
            })
    }

    const handleChange = (e) =>{
        setPlayer({...player, [e.target.name]: e.target.value })
    } 


    return (
        <div className='w-75 m-auto border border-3 border-dark'>
            <p className='fs-4 ms-3'>Add a player:</p>
            <form className='pb-3 text-center' onSubmit={handleSubmit} >
                {error.map((err, i) => <p key={i}>{err}</p>)}
                <div className='mb-3 w-25 text-center m-auto'>
                    <label className='form-label' >Enter Player Name:</label>
                    <input name='name' className='form-control' type="text" placeholder='Ex: "John Doe"'  onChange={handleChange} />
                </div>
                <div className='mb-3 w-25 text-center m-auto'>
                    <label className='form-label' >Preferred Position:</label>
                    <input name='position' className='form-control' type="text" placeholder='Ex: "Forward/Striker"'  onChange={handleChange} />
                </div>
                <input type="submit" value="Submit" className="btn btn-primary" />
                <a href="/" className="btn btn-danger ms-3">Cancel</a>
            </form>
        </div>
    )
}

export default Form