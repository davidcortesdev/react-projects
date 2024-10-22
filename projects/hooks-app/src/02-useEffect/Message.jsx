import { useEffect, useState } from "react"

export const Message = () => {

  const [coords, setCoords] = useState({x:0, y:0})
  

  useEffect(() => {

      const onMouseMove = ({ x, y }) => {
        setCoords({ x, y })
      }

      //console.log('Message Mounted')
      window.addEventListener( 'mousemove',onMouseMove )
    
      return () => {
        //console.log('Message UnMounted')
        window.removeEventListener( 'mousemove', onMouseMove)
      }
    }, [])

    return (
      <>
          <h3>Usuario ya existe</h3>
          { JSON.stringify( coords ) }
      </>
    )
}
