import React from 'react';
import MovieImage from '../MovieImage/MovieImage';
import MovieTitle from '../MovieTitle/MovieTitle';
import './MovieCard.css';

// MovieCard component that displays a movie's image and title.
// It receives two props: 'movie' and 'Images'.
const MovieCard = ({ movie, Images }) => {
    return (
        <div className='container'>
            {/* Render the MovieImage component with the 'poster_path' from 'movie' and 'Images' prop. */}
            <MovieImage poster_path={movie.poster_path} Images={Images} />
            
            {/* Render the MovieTitle component with the 'title' or 'name' from 'movie'. */}
            <MovieTitle title={movie.title || movie.name} />
        </div>
    )
}

export default MovieCard;
