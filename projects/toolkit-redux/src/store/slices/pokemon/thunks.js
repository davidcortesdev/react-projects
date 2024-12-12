import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemon, startLoadingPokemons } from "./pokemonSlice"
import PropTypes from 'prop-types'

export const getPokemons = ( page = 0 ) => {
    return async( dispatch, /* getState */ ) => {
        dispatch( startLoadingPokemons() )
        
        //TODO: realizar petición http
        
        /* const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        const data = await resp.json()
        console.log(data) */

        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)

        dispatch( setPokemon({ pokemons: data.results, page: page + 1 }) )
    }    
}

getPokemons.propTypes = {
    page: PropTypes.number,
    getState: PropTypes.func
}