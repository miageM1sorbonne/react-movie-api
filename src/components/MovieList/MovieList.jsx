import React, { useState, useRef } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const MovieList = ({ movies, Images }) => {
  // State to keep track of whether the movie list is moved and the current slide number.
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  // Function to handle arrow button clicks and move the movie list.
  const handleClick = (direction) => {
 

    // Get the current horizontal position of the movie list container.
    let distance = listRef.current.getBoundingClientRect().x - 5;

    if (direction === "left" && slideNumber >= 0) {
      // Move the movie list to the left.
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if (direction === "right" && slideNumber < 16) {
      // Move the movie list to the right.
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="movieListContainer">
      <div className="movieListWrapper">
        {/* Arrow button to move the movie list to the left. */}
        <IoIosArrowBack className="sliderArrow left" onClick={() => handleClick("left")} />
        <div className="movieList" ref={listRef}>
          {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} Images={Images} />;
          })}
        </div>
        {/* Arrow button to move the movie list to the right. */}
        <IoIosArrowForward className="sliderArrow right" onClick={() => handleClick("right")} />
      </div>
    </div>
  );
};

export default MovieList;
