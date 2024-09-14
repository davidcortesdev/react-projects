import { Navegador } from './components/Navegador'
import { PrimeraSeccion } from './components/PrimeraSeccion'
import { Separador } from './components/Separador'
import { Tarjeta } from './components/Tarjeta'

function App() {

  return (
    <>
      <Navegador />
      <PrimeraSeccion />
      <Separador />
      <section className="seccion-tarjetas">
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
      </section>
      <PrimeraSeccion />
    </>
  )
}

export default App
