import React from 'react';
import { IoIosCash } from "react-icons/io";
import './MovieBudget.css';

const MovieBudget = ({ budget }) => {

    const formattedBudget = budget ? `${Number(budget).toLocaleString()} $` : 'Unknown';

    return (
            <div className="movie-budget">
              <span className="movie-budget-icon"><IoIosCash /></span>
              <p>Budget : {formattedBudget}</p>
            </div>
         );
};

export default MovieBudget;