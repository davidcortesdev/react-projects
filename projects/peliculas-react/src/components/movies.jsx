/* eslint-disable react/prop-types */
function ListOfMovies ({ movies }) {
 return (
    <ul className='lista-peliculas'>
     {
        movies.map(movie => (
        <li className='pelicula' key={movie.id}>
            <h1>{movie.title}</h1>
            <p>{movie.year}</p>
            <img src={movie.image} alt={movie.title} />
        </li>
        ))
     }
    </ul>
 )
}

function NoMoviesResults () {
   return(
    <p>No se encontraron películas para esta búsqueda</p>
    )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

    return(
        hasMovies
            ? <ListOfMovies movies={movies}/>
            : <NoMoviesResults />
    )
}