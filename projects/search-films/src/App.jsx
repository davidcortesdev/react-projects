import { useRef, useState } from 'react'
import './App.css'
import { Search } from './components/Search'

function App() {

  const [search, setSearch] = useState(null)
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = inputRef.current.value
    setSearch(value)
  }


  return (
    <>
      <h1 className='search-h1'>Movie finder</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input ref={inputRef} className='search-input' placeholder='Avengers, Harry Potter...'></input>
        <button type='submit' className='search-button'>Search</button>
      </form>
      <Search search={search}/>
    </>
  )
}

export default App
