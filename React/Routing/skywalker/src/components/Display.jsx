import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Display = () => {
    const types = {
        'people': ['height', 'mass', 'hair_color', 'skin_color'],
        'planets' : ['climate', 'terrain', 'surface_water', 'population']
    }
    const [ info, setInfo ] = useState({})
    const { type, id } = useParams()
    const fetchInfo = async (type, id) => {
        const response = await axios.get(`https://swapi.dev/api/${type}/${id}`)
        return response.data
    }
    useEffect(() => {
        fetchInfo(type, id)
            .then(setInfo)
    }, [type, id])
    


    return (
        <div className='bg-light text-dark'>
            <p className='fs-1'>Name: {info.name}</p>
            <ul>
            {
                types[type].map((key, i) =>{
                    return(
                        <li key={i}>{key}: {info[key]}</li>
                    )}
                )
            }
            </ul>
        </div>
    )
}

export default Display