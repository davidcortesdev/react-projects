import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './InfoPelicula.css';

export function InfoPelicula() {
  const { id } = useParams(); // Obtenemos el imdbID de la URL
  const API_KEY = '4287ad07';
  const URL = 'https://www.omdbapi.com/?apikey=';
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${URL}${API_KEY}&i=${id}&plot=full`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <div className="movie-detail loading">Cargando...</div>;
  if (!movie || movie.Response === "False")
    return <div className="movie-detail error">No se encontró la película.</div>;

  return (
    <div className="movie-detail">
      <h2>{movie.Title}</h2>
      <div className="movie-detail-content">
        <img className="movie-poster" src={movie.Poster} alt={movie.Title} />
        <div className="movie-info">
          <p><strong>Año:</strong> {movie.Year}</p>
          <p><strong>Género:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actores:</strong> {movie.Actors}</p>
          <p><strong>Trama:</strong> {movie.Plot}</p>
          <p><strong>Idioma:</strong> {movie.Language}</p>
          <p><strong>Premios:</strong> {movie.Awards}</p>
        </div>
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
}
