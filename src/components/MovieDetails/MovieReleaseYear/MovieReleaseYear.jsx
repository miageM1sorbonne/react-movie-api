import React from 'react';
import { IoIosCalendar } from "react-icons/io";
import './MovieReleaseYear.css';

const MovieReleaseYear = ({ releaseDate }) => {

    const year = releaseDate ? new Date(releaseDate).getFullYear() : 'Unknown';

    return (
            <div className="movie-release-year">
              <span className="movie-release-year-icon"><IoIosCalendar /></span>
              <p>Release year : {year}</p>
            </div>
         );
};

export default MovieReleaseYear;