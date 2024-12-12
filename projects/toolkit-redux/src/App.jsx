import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy } from './store/slices/counter'
import './App.css'

function App() {

  const { counter } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>count is { counter }</h2>
      <div className="card">
        <button onClick={ () => { dispatch( increment() )} }>
          Increment
        </button>
        <button onClick={ () => { dispatch( decrement() )} }>
          Decrement
        </button>
        <button onClick={ () => { dispatch( incrementBy(3) )} }>
          Increment by 2
        </button>
      </div>
    </>
  )
}

export default App
