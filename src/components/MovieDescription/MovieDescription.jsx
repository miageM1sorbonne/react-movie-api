import React from 'react';
import './MovieDescription.css';

const MovieDescription = ({ children }) => {
    return (
        <p className="movie-description">{children}</p>
    );
};
   
export default MovieDescription;