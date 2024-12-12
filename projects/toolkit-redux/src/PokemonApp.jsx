import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks'

export const PokemonApp = () => {

    const dispatch = useDispatch()
    const { isLoading, page, pokemons = [] } = useSelector(state => state.pokemons)

    useEffect(() => {
        dispatch( getPokemons() )
    }, [dispatch])
    
    return (
        <>
            <h1>Pokemon App</h1>
            <hr />
            <span>{ isLoading ? 'Cargando datos...' : 'Datos cargados.'}</span>

            <ul>
                { pokemons.map( pokemon => (
                    <li key={pokemon.name}>{ pokemon.name }</li>
                )) }
            </ul>

            <button
                disabled={ isLoading }
                onClick={ () => dispatch( getPokemons( page ) ) }>
                Next
            </button>
        </>
    )
}
