// MovieRuntime.jsx
import React from 'react';
import { IoIosTime } from "react-icons/io";
import './MovieRuntime.css';

const MovieRuntime = ({ runtime }) => {
 const hours = Math.floor(runtime / 60);
 const minutes = runtime % 60;

 return (
    <div className="movie-runtime">
      <span className="movie-runtime-icon"><IoIosTime /></span>
      <p>Running time : {hours}h {minutes}m</p>
    </div>
 );
};

export default MovieRuntime;