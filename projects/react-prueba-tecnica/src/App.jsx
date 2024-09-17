import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//  const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [longitud, setLongitud] = useState(0)

  const ejecutarCodigo = () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact, length } = data
        setFact(fact)

        const longitud = length
        const threeFirstWords = fact.split(' ', 3).join(' ')
        console.log(threeFirstWords)

        const newImageUrl = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`
        setImageUrl(newImageUrl)
        setLongitud(longitud)
        console.log(newImageUrl)
      })
  }

  useEffect(() => {
    ejecutarCodigo()
  }, [])

  return (
    <main>
      <h1> App de gatitos </h1>
      {fact && <p>{fact}</p>}
      {longitud && <p>Longitud de la cadena: {longitud}</p>}
      {imageUrl && <img src={imageUrl} alt={`Cat image for: ${fact}`} />}
      <br />
      <button onClick={ejecutarCodigo} className='randomizar'>Randomizar</button>
    </main>
  )
}
