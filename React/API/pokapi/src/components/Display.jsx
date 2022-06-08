import React, { useState, useContext } from 'react'
import { Pokemon } from '../context/PokemonContext'

const Display = () => {
    const { pokemon } = useContext(Pokemon)
    return (
        <div>
            <ul>
                {
                    pokemon.map((pokemon, i) => {
                        return(
                            <li key={i}>{pokemon.name}</li>
                        )
                    }
                    )
                }
            </ul>
        </div>
    )
}

export default Display