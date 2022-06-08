import React, { useState } from 'react'
import { Pokemon } from './context/PokemonContext'
import axios from 'axios'
import Display from './components/Display'

function App() {
  const [pokemon, setPokemon] = useState([])

  
  console.log(pokemon)
  const fetchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807&offset=0`)
      .then(response => {
        setPokemon(response.data.results)
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <Pokemon.Provider value={{ pokemon }} >
        <button onClick={fetchPokemon}>Get Pokemon</button>
        <Display />
      </Pokemon.Provider  >
    </div>
  );
}

export default App;
daawadasdwdwda*****************