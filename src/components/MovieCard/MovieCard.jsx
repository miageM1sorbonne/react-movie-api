import React, {useContext} from 'react';
import MovieImage from '../MovieImage/MovieImage';
import MovieTitle from '../MovieTitle/MovieTitle';
import './MovieCard.css';
import Button from '../Button/Button';
import { WatchListContext } from '../../providers/WatchList/WatchListState';

// MovieCard component that displays a movie's image and title.
// It receives two props: 'movie' and 'Images'.
const MovieCard = ({ movie, Images }) => {
    const { addMovieToWatchList, removeMovieFromWatchList, watchList,  } = useContext(WatchListContext);

    let storedMovie = watchList.find(o=> o.id === movie.id);

    const movieAlreadyAdded = storedMovie ? true : false;

    const onClick = (e) => {
        console.log(e);
        if (e) {
          console.log('add ' + movie.title + ' into watch list');
          if(!movieAlreadyAdded)
            addMovieToWatchList(movie);
          

        } else {
          console.log('deleted from watch list');
          removeMovieFromWatchList(movie.id);
          
        }
      };

    return (
        <div className='container'>
            {/* Render the MovieImage component with the 'poster_path' from 'movie' and 'Images' prop. */}
            <MovieImage poster_path={movie.poster_path} Images={Images} />
            
            {/* Render the MovieTitle component with the 'title' or 'name' from 'movie'. */}
            <MovieTitle title={movie.title || movie.name} />

            {/* ToggleButton */}
            <Button type={'toggle'} children={!movieAlreadyAdded ? '+' : '✓'} onClick={(e) => onClick(e)} movieId={movie.id} />

        </div>
    )
}

export default MovieCard;
