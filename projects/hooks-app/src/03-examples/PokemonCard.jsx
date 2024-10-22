import PropTypes from 'prop-types'
import { useLayoutEffect, useRef, useState } from 'react'

//No funciona porque el map carga después del renderizado del DOM,
//con lo cual la información se asigna después del map.
//Se solucionaria con un metodo llamado en onLoad

export const PokemonCard = ({ id, name, sprites = []}) => {

    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({ width: 0, height:0 })

    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect()
        setBoxSize({ width, height })
    }, [name])

  return (
    <section >
        <h2 className="text-capitaliza">#{id} - {name}</h2>

        <div >
            {
                sprites.map( sprite => (
                    <img ref={pRef}
                         key={sprite}
                         src={sprite} 
                         alt={name} 
                         />
                ))
            }
            
        </div>

        <h2>{JSON.stringify(boxSize)}</h2>
        
    </section>
  )
}

PokemonCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    sprites: PropTypes.array
}
