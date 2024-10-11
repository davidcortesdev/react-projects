import PropTypes from "prop-types";
import { useState } from "react";

function CounterApp ( {value} ) {

  const [contador, setContador] = useState(value)

  const handleSuma = () => setContador(contador+1)
  const handleResta = () => setContador(contador-1)
  const handleReset = () => setContador(value)

  return (
    <>
    <h1>Contador:</h1>
      <p>{contador}</p>
      <button onClick={(handleSuma)}>Sumar</button>
      <button onClick={handleResta}>Restar</button>
      <button onClick={handleReset}>Restar</button>
    </>
  )
  
}

CounterApp.propTypes = {
  value: PropTypes.number
}

export default CounterApp;

