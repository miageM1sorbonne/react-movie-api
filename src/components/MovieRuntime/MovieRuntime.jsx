// MovieRuntime.jsx
import React from 'react';
import './MovieRuntime.css';

const MovieRuntime = ({ runtime }) => {
 const hours = Math.floor(runtime / 60);
 const minutes = runtime % 60;

 return (
    <div className="movie-runtime">
      <p>{hours}h {minutes}m</p>
    </div>
 );
};

export default MovieRuntime;