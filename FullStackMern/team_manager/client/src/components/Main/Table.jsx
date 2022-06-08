import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Table = () => {
    const [players, setPlayers] = useState()

    const getAll = async () => {
        const response = await axios.get(`http://localhost:8000/api/all/players`)
        return response.data
    }

    const deleteOne = async (id) => {
        await axios.delete(`http://localhost:8000/api/delete/player/${id}`)
    }

    const handleDelete = (id) => {
        deleteOne(id)
            .then(() => setPlayers(prev => prev.filter((player) => player._id !== id)))
    }

    useEffect(() => {
        getAll()
            .then(setPlayers)
    }, [])

    return (
        players ?
            <table className='table table-info table-striped border border-3 border-dark'>
                <thead>
                    <tr>
                        <td>Player name:</td>
                        <td>Preferred Position:</td>
                        <td>Actions:</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, i) => {
                            return(
                                <tr key={i}>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                <td><input type="button" className='btn btn-danger' onClick={() => handleDelete(player._id)} value="Delete" /></td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            :
            <p>Loading...</p>
    )
}

export default Table