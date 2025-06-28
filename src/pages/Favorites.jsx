import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <>
      {favorites && favorites.length > 0 ? (
        <div className="movies-grid">
          {favorites.map((fav) => (
            <div className="movie-grid-item" key={fav.id}>
              <MovieCard movie={fav} />
            </div>
          ))}
        </div>
      ) : (
        <div className="favorites-empty">
          <h2>No favorite movies Yet</h2>
          <p>
            Start adding movies to your favorites and they will appear here!
          </p>
        </div>
      )}
    </>
  );
}

export default Favorites;
