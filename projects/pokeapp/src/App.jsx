import { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'
import logo from './assets/logo_pokedex.png'



const typesList = [
  { id: "ver-todos", label: "Ver todos" },
  { id: "normal", label: "Normal" },
  { id: "fire", label: "Fire" },
  { id: "water", label: "Water" },
  { id: "grass", label: "Grass" },
  { id: "electric", label: "Electric" },
  { id: "ice", label: "Ice" },
  { id: "fighting", label: "Fighting" },
  { id: "poison", label: "Poison" },
  { id: "ground", label: "Ground" },
  { id: "flying", label: "Flying" },
  { id: "psychic", label: "Psychic" },
  { id: "bug", label: "Bug" },
  { id: "rock", label: "Rock" },
  { id: "ghost", label: "Ghost" },
  { id: "dark", label: "Dark" },
  { id: "dragon", label: "Dragon" },
  { id: "steel", label: "Steel" },
  { id: "fairy", label: "Fairy" }
]

const API_URL = "https://pokeapi.co/api/v2/pokemon/"

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [filter, setFilter] = useState("ver-todos")

  useEffect(() => {
    const fetchPokemon = async () => {
      const promises = []
      for (let i = 1; i <= 151; i++) {
        promises.push(fetch(API_URL + i).then(res => res.json()))
      }
      const results = await Promise.all(promises)
      setPokemonList(results)
    }
    fetchPokemon()
  }, [])

  const handleFilter = (id) => {
    setFilter(id)
  }

  // Se filtran los Pokémon según el botón presionado
  const filteredPokemon = pokemonList.filter(pokemon => {
    if (filter === "ver-todos") return true
    const pokemonTypes = pokemon.types.map(t => t.type.name)
    return pokemonTypes.includes(filter)
  })

  return (
    <div>
      <header>
        <nav className="nav">
          <a href="/">
            <img className="logo" src={logo} alt="Logo Pokédex" />
          </a>
          <ul className="nav-list">
            {typesList.map((type) => (
              <li key={type.id} className="nav-item">
                <button
                  className={`btn btn-header ${type.id !== "ver-todos" ? type.id : ""}`}
                  onClick={() => handleFilter(type.id)}
                >
                  {type.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <div id="todos">
          <div className="pokemon-todos" id="listaPokemon">
            {filteredPokemon.map(pokemon => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
