import MovieList from '../MovieList/MovieList';
import './MovieListByGenre.css';
import useMovieListByGenre from '../../hooks/useMovieListByGenre';

const MovieListByGenre = ({ genreUrl, genre }) => {

// Use the custom hook
const { movies } = useMovieListByGenre(genreUrl);

  return (    
      <div className="movie-by-genre">
          {/* Display the genre as a heading. */}
          {movies.length > 1 && <h2>{genre}</h2>}
          
          {/* Render the MoviesContainer component and pass in the movie data and image URL. */}
          <MovieList movies={movies} Images={process.env.REACT_APP_ImagesLink} />
      </div>
  )
}

export default MovieListByGenre;
