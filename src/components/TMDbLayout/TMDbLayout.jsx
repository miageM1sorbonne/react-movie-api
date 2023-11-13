import React  from 'react';
import MovieListByGenre from '../MovieListByGenre/MovieListByGenre';
import requests from '../../request';
import SearchBar from '../SearchBar/SearchBar';

const TMDbLayout = ({setInputValue}) => {

 // Define a list of movie genres
 const genres = [
    { genre: 'Search', genreUrl: requests.fetchMovie },
    { genre: 'Trending', genreUrl: requests.fetchTrending },
    { genre: 'Top Rated', genreUrl: requests.fetchTopRated },
    { genre: 'Action Movies', genreUrl: requests.fetchActionMovies },
    { genre: 'Comedy Movies', genreUrl: requests.fetchComedyMovies },
    { genre: 'Horror Movies', genreUrl: requests.fetchHorrorMovies },
    { genre: 'Romance Movies', genreUrl: requests.fetchRomanceMovies },
    { genre: 'Documentaries', genreUrl: requests.fetchDocumentaries },
 ];

 return (
    <div className="homepage">
      {/* Map through the list of genres and render a MoviesByGenre component for each */}
      <SearchBar setInputValue={setInputValue} />
      {genres.map((genre) => (
        <MovieListByGenre key={genre.genre} genre={genre.genre} genreUrl={genre.genreUrl} />
      ))}
    </div>
 );
};

export default TMDbLayout;