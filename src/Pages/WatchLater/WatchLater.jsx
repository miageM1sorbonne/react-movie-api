import React, { useContext } from "react";
import { WatchListContext } from "../../providers/WatchList/WatchListState";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieTitle from "../../components/MovieDetails/MovieTitle/MovieTitle";
import "./WatchLater.css"

function WatchLater() {
  const { watchList } = useContext(WatchListContext);

  return (
    <div className="movie-page">
        <div className="header">
          <h1 className="heading">My Watch List</h1>
        </div>
        <div className="container">
          {watchList.length > 0 ? (
            <div className="movie-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
              {watchList.map((movie) => (
                <div className="movie-item" key={movie.id} style={{ marginRight: '20px' }}>
                  <MovieCard movie={movie} Images={process.env.REACT_APP_ImagesLink} />
                  <MovieTitle title={movie.title || movie.name} />
                </div>
              ))}
            </div>
          ) : (
            <h2 className="np-movies">No movies in your list</h2>
          )}
        </div>
      </div>
  
  );
}

export default WatchLater;