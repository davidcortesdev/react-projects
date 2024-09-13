import { Tarjeta } from './componentes/Tarjeta.jsx'
import { Contador } from './componentes/Contador.jsx'
import { useState } from 'react'
import './App.css'
import imagen1 from './assets/rey_ervigio.png'
import imagen2 from './assets/rey_ataulfo.png'
import imagen3 from './assets/rey_leogivildo.png'
import imagen4 from './assets/rey_recesvinto.png'
import imagen5 from './assets/rey_atanagildo.png'
import imagen6 from './assets/rey_teodorico.png'

const nombres = ['Ervigio', 'Ataulfo', 'Leogivildo']




function App() {

  const [imagen, setImagen] = useState(imagen1)

  function checkImage () {
    if(imagen == imagen1){
      setImagen(imagen2)
    }else{
      setImagen(imagen1)
    }
  }

  const [imagenz, setImagenz] = useState(imagen3)

  function checkImagez () {
    if(imagenz == imagen3){
      setImagenz(imagen4)
    }else{
      setImagenz(imagen3)
    }
  }

  const [imagenx, setImagenx] = useState(imagen5)

  function checkImagex () {
    if(imagenx == imagen5){
      setImagenx(imagen6)
    }else{
      setImagenx(imagen5)
    }
  }

  return (
    <>
    <section className="contenedor">
      <Tarjeta changeImage={checkImage} imagen={imagen} texto={nombres[0]}/>
      <Tarjeta changeImage={checkImagez} imagen={imagenz} texto={nombres[1]}/>
      <Tarjeta changeImage={checkImagex} imagen={imagenx} texto={nombres[2]}/>
    </section>
    
    <Contador />
    </>
  )
}

export default App
