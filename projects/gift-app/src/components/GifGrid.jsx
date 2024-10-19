import PropTypes from 'prop-types'
import { GifItem } from './GifItem'
import { useLoadGifs } from '../hooks/useLoadGifs'

export const GifGrid = ({ category }) => {


    const { gifs, isLoading } = useLoadGifs( category )
    
    return(
        <>
            <h3>{ category }</h3>
            {
                isLoading && <h2>Cargando...</h2>
            }
            <div className='card-grid'>
            {
                gifs.map( ( gif ) => (
                    <GifItem key={gif.id} {...gif}/>
                ))
            }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}