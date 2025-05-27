import "../css/MovieCard.css";
import useMovieContext from "../contexts/useMovieContext";

function MovieCard({ movie }) {
  const { isFavourite, addtoFavourites, removeFromFavourites } =
    useMovieContext();
  const favourite = isFavourite(movie.id);

  function handleFavouriteCick(e) {
    e.preventDefault();
    if (favourite) removeFromFavourites(movie.id);
    else addtoFavourites(movie);
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favourite-btn ${favourite ? "active" : ""}`}
            onClick={handleFavouriteCick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
