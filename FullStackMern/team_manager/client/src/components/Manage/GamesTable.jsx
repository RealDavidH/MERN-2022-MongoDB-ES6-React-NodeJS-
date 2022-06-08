import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const GamesTable = () => {
    const { num } = useParams()
    const [players, setPlayers] = useState()
    const [selected, setSelected] = useState()

    const getAll = async () => {
        const response = await axios.get(`http://localhost:8000/api/all/players`)
        return response.data
    }

    const updateGames = async(player, num) =>{
        const games = player.games //[0,0,0]
        games[selected] = num
        axios.put(`http://localhost:8000/api/update/player/${player._id}`, {
            name: player.name,
            position: player.position,
            games: games
        }) 
    }

    const handleClick = (player, num) =>{
        updateGames(player, num)
            .then(() => setPlayers(prev => prev.filter((allplayer) => allplayer)))
    }

    useEffect(() => {
        setSelected(num) //should be in map function 
        getAll()
            .then(setPlayers)
    }, [num])
    
    return (
        players ?
            <table className='table table-info table-striped border border-3 border-dark'>
                <thead>
                    <tr>
                        <td>Player name:</td>
                        <td className='text-center'>Actions:</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, i) => {
                            return (
                                <tr key={i}>
                                    <td>{player.name}</td>
                                    <td className='text-center'>           {/* player.games = [0,0,0],  selected = 0 */}
                                        <input type="button" className={`${player.games[selected] === 1 ? 'btn btn-success' : 'btn btn-outline-success'}`} 
                                        onClick={() => handleClick(player, 1)} value="Playing" />
                                        <input type="button" className={`${player.games[selected] === 2 ? 'btn btn-danger' : 'btn btn-outline-danger'} me-3 ms-3`} 
                                        onClick={() => handleClick(player, 2)} value="Not Playing" />
                                        <input type="button" 
                                        className={`${player.games[selected] === 0 ? 'btn btn-warning' : 'btn btn-outline-warning'}`} 
                                        onClick={() => handleClick(player, 0)} value="Undecided" />
                                    </td>
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

export default GamesTable