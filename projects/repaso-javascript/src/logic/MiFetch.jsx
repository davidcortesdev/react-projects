import { useEffect } from "react"
import { useState } from "react"


export function MiFetch(){

  const api_key = 'FaKt9J41hu7UF0lbPvRBNybY4MqJPIUb'
  const [datos, setDatos] = useState(null)

  useEffect(()=>{
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)
        .then(res => res.json())
        .then(response => {
          setDatos(response)
         })
        .catch(err => console.warn(err))
  },[])

    return(
        datos ? 
        <img src={datos.data.images.original.url} alt="" />
        : 'No hay datos'
    )
         
}