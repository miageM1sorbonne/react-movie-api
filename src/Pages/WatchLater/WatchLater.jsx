import React, { Fragment, useContext } from "react";
import { WatchListContext } from "../../providers/WatchList/WatchListState";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieList from "../../components/MovieList/MovieList";
import MovieTitle from "../../components/MovieTitle/MovieTitle";
import MovieDescription from "../../components/MovieDescription/MovieDescription";


function WatchLater() {
    const { watchList } = useContext(WatchListContext);
  
    return (
      <Fragment>
        <div className="movie-page">
          <div className="container">
            <div className="header">
              <h1 className="heading">My Watch List</h1>
            </div>
  
            {watchList.length > 0 ? (
              <div className="movie-list">
                {watchList.map((movie) => (
                  <div className="movie-item" key={movie.id}>
                    <MovieCard movie={movie} Images="https://image.tmdb.org/t/p/w500" />
                    {/**<MovieTitle title={movie.title || movie.name} />**/ }
                    {/**<MovieDescription>{movie.overview}</MovieDescription> **/ }
                  </div>
                ))}
              </div>
            ) : (
              <h2 className="np-movies">No movies in your list</h2>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
  
  export default WatchLater;