import React from 'react';
// import './MovieCast.css';

const MovieCast = ({ credits }) => {

    return (
        <div className="movie-cast">
            <h2>Cast</h2>
            <ul>
              {credits.cast && credits.cast.map(actor => (
                <li key={actor.id}>
                  <p>{actor.name}</p>
                  <p>Character: {actor.character}</p>
                </li>
              ))}
            </ul>
          </div>
         );
};

export default MovieCast;