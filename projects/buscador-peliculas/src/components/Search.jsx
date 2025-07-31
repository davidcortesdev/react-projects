/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Search({ search }) {
  const API_KEY = '4287ad07';
  const URL = 'https://www.omdbapi.com/?apikey=';
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${URL}${API_KEY}&s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
      });
  }, [search]);

  // Función para redirigir al detalle de la película al hacer click
  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <section className="search-container">
      <ul className="movies-grid">
        {movies?.map((movie) => (
          <li 
            className="movie-card" 
            key={movie.imdbID} 
            onClick={() => handleClick(movie.imdbID)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img 
                  className="movie-poster" 
                  src={movie.Poster} 
                  alt={movie.Title} 
                />
                <div className="card-overlay">
                  <h2 className="movie-title">{movie.Title}</h2>
                  <p className="movie-year">{movie.Year}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
