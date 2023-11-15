import { useState, useEffect, useContext, useCallback } from 'react';
import { Container } from "../App"; 

const useMovieListByGenre = (genreUrl) => {
 // Value from the context (navbar)
 const inputValue = useContext(Container);

 // Initialize state for storing movie data.
 const [movies, setMovies] = useState([]);

 const fetchMovies = useCallback(async () => {
    try {
      const response = await fetch(`${genreUrl}&query=${inputValue}`);
      const data = await response.json();

      // Extract the movie results from the response and update the state.
      const results = data.results;
      setMovies(results);
    } catch (error) {
      console.error('Error fetching movies:', error);
      
    }
 }, [inputValue, genreUrl]); 

 useEffect(() => {
    fetchMovies();
 }, [inputValue, genreUrl, fetchMovies]); 

 // Return the movies and a function to refetch them if needed.
 return { movies, refetchMovies: fetchMovies };
};

export default useMovieListByGenre;