import React, {useContext} from 'react';
import MovieImage from '../MovieDetails/MovieImage/MovieImage'
import './MovieCard.css';
import Button from '../Button/Button';
import { WatchListContext } from '../../providers/WatchList/WatchListState';
import { Link } from "react-router-dom";

// MovieCard component that displays a movie's image and title.
// It receives two props: 'movie' and 'Images'.
const MovieCard = ({ movie, Images }) => {
    const { addMovieToWatchList, removeMovieFromWatchList, watchList,  } = useContext(WatchListContext);

    let storedMovie = watchList.find(o=> o.id === movie.id);

    const movieAlreadyAdded = storedMovie ? true : false;

    const onClick = (e) => {
        //console.log(e);
        if (e) {
          if(!movieAlreadyAdded)
            addMovieToWatchList(movie);
        }
        else 
          removeMovieFromWatchList(movie.id);
      };

    return (
        <div className='container'>
            <Link to={`/movie/${movie.id}`}>
              {/* Render the MovieImage component with the 'poster_path' from 'movie' and 'Images' prop. */}
              <MovieImage poster_path={movie.poster_path} Images={Images} />
            </Link>
            

            {/* ToggleButton */}
            <Button type={'toggle'} onClick={(e) => onClick(e)} movieId={movie.id} />
        </div>
    )
}

export default MovieCard;
