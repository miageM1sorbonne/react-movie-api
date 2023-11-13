import { Fragment, useContext } from "react";
import { WatchListContext } from "../../providers/WatchList/WatchListState";
import MovieCard from "../MovieCard/MovieCard";

function WatchLater (){
    const {watchList} = useContext(WatchListContext);

    return (    
        <Fragment>

            <div className="movie-page">
                <div className="container">
                    <div className="header">
                        <h1 className="heading">My Watch List</h1>

                    </div>

                    {watchList.length > 0 ? (
                        <div className="movie-list">
                        {watchList.map( (movie) => (
                            //<h1>{movie.title} </h1>
                            <MovieCard key={movie.id} movie={movie} Images={"https://image.tmdb.org/t/p/w500"}/>
                            // <MovieList movies={movie} Images={"https://image.tmdb.org/t/p/w500"}  />
                        ))}
                    </div>

                    ) : ( <h2 className="np-movies">No movies in your list</h2>)}

                    
                </div>

            </div>




           
        </Fragment>
    )
}

export default WatchLater;
