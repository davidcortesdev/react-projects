/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export function Search({search}) {

    const API_KEY = '4287ad07'
    const URL = 'https://www.omdbapi.com/?apikey='

    const [movies, setMovies] = useState([])

    useEffect(()=>{
        fetch(`${URL}${API_KEY}&s=${search}`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.Search)
            })
    },[search])

    return(
        <section className='search-container'>
            <ul className='search-list'>
                {
                movies.map((movie) => (
                        <li className='search-movie' key={movie.imdbID}>
                            <h1 className='search-title'>{movie.Title}</h1>
                            <img className='search-image'src={movie.Poster} alt="" />
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}
