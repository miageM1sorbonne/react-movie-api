import React from 'react';
import NoImg from '../../no-image.png';
import './MovieImage.css';

// MovieImage component responsible for displaying a movie's image.
// It receives two props: 'poster_path' and 'Images'.
const MovieImage = ({ poster_path, Images }) => {
    return (
        <img
            className="movie-image"
            // If 'poster_path' exists, display the movie image by combining 'Images' and 'poster_path'.
            // Otherwise, display a fallback image specified by 'NoImg'.
            src={poster_path ? `${Images}${poster_path}` : NoImg}
            alt=''
        />
    );
};

export default MovieImage;
