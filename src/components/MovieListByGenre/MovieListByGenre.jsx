import React, { useState, useEffect, useContext } from 'react';
import MovieList from '../MovieList/MovieList';
import './MovieListByGenre.css';
import { Container } from "../NavBar/NavBar";

const MovieListByGenre = ({ genreUrl, genre }) => {
  // Value from the context (navbar)
  const inputValue = useContext(Container);
  
  // Initialize state for storing movie data and set the image base URL.
  const [movies, setMovies] = useState([]);
  const Images = 'https://image.tmdb.org/t/p/w500';

  // Function to fetch movies based on the genre and user input (only for search).
  const fetchMovies = async () => { 
      const response = await fetch(`${genreUrl}&query=${inputValue}`);
      const data = await response.json();

      // Extract the movie results from the response and update the state.
      const results = data.results;
      setMovies(results);
  }
  
  // Fetch movies when the 'inputValue' changes.
  useEffect(() => {
      fetchMovies();
  });

  return (    
      <div className="movie-by-genre">
          {/* Display the genre as a heading. */}
          <h2>{genre}</h2>
          
          {/* Render the MoviesContainer component and pass in the movie data and image URL. */}
          <MovieList movies={movies} Images={Images} />
      </div>
  )
}

export default MovieListByGenre;
