import { useCounter } from "../01-useState/hooks/useCounter"
import { useFetch } from '../03-examples/hooks/useFetch'
import { LoadingMessage } from '../03-examples/LoadingMessage'
import { PokemonCard } from '../03-examples/PokemonCard'

export const Layout = () => {

    const { counter, onIncrement, onDecrement} = useCounter(1)
    const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

  return (
    <>
        <h1>Información de Pokémons</h1>
        
        <hr />
        
        { 
            isLoading
                ? <LoadingMessage />
                : <PokemonCard 
                    id={data.id} 
                    name={data.name} 
                    sprites={[
                        data.sprites.front_default,
                        data.sprites.back_default,
                        data.sprites.front_shiny,                        
                        data.sprites.back_shiny,
                    ]} />
        }
    
        <button onClick={() => onDecrement()} className="btn btn-primary mt-2">Anterior</button>
        <button onClick={() => onIncrement()} className="btn btn-primary mt-2">Siguiente</button>
        
       
    </>
  )
}
