import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'

function App() {

  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

  return (
    <>
      <header>
        <h1>Buscador de peliculas</h1>
        <form>
          <input className='input-buscador' type='text' placeholder='Avengers, Piratas del caribe...' />
          <button> Buscar </button>
        </form>
      </header>
        
      <main>
        {
        hasMovies
          ? (
            <ul className='lista-peliculas'>
              {
                movies.map(movie => (
                  <li className='pelicula' key={movie.imdbID}>
                    <h1>{movie.Title}</h1>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt="" />
                  </li>
                ))
              }
            </ul>
          ) : withoutResults.Error
        }
      </main>
    </>
  )
}

export default App
