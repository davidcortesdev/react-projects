import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleSuma = () => setCount(count + 1)
  const handleResta = () => setCount(count - 1)
  const handleReset = () => setCount(0)

  return (
    <>
      <h1>Contador</h1>
      <h2>{count}</h2>
      <button onClick={handleSuma}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleResta}>-1</button>
    </>
  )
}

export default App
