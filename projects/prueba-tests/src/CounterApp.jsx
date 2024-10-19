import { useState } from 'react'
import './CounterApp.css'
import PropTypes from 'prop-types'

function CounterApp({contad}) {
  const [count, setCount] = useState(contad)

  const handleSuma = () => setCount(count + 1)
  const handleResta = () => setCount(count - 1)
  const handleReset = () => setCount(contad)

  return (
    <>
      <h1>Contador</h1>
      <h2>{count}</h2>
      <button aria-label="btn-suma" onClick={handleSuma}>+1</button>
      <button aria-label="btn-reset" onClick={handleReset}>Reset</button>
      <button onClick={handleResta}>-1</button>
    </>
  )
}

CounterApp.propTypes = {
  contad: PropTypes.number
}

export default CounterApp

