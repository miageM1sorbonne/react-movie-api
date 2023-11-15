import { Fragment } from "react";
import MovieCard from '../MovieCard/MovieCard';
import MovieTitle from '../MovieTitle/MovieTitle';
import MovieRuntime from '../MovieRuntime/MovieRuntime';
import MovieReleaseYear from '../MovieReleaseYear/MovieReleaseYear';
import MovieBudget from '../MovieBudget/MovieBudget';
import './MovieDetail.css';

const MovieDetail = ({ movie, director}) => {

    const Images = 'https://image.tmdb.org/t/p/w500';
    const backgroundStyle = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundImage: `url(${Images}${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(4px)',
        zIndex: '-1',
    };
    
    const getGenres = (max) => {
        return movie.genres?.slice(0, max).map(genre => genre.name).join(', ') ?? 'Unknown';
    };

    return (    
        <Fragment>
            <div className="moviedetail-background" style={backgroundStyle}></div>
            <div className="moviedetail-content">
                <div className="moviedetail-thumb">
                    <MovieCard movie={movie} Images={Images} />
                </div>
                <div className="moviedetail-text">
                    <MovieTitle title={movie.title} size="moviedetail"></MovieTitle>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>
                    <div className="moviedetail-more">
                        <div>
                            <h3>IMDB rating</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>
                        
                        <div>
                            <h3>director</h3>
                            <p>{director}</p>
                        </div>
                        
                        <div>
                            <h3>genre</h3>
                            <p>{getGenres(4)}</p>
                        </div>
                    </div>
                </div> 
                
            </div>
            <div className="moviedetail-bar">
                <MovieRuntime runtime={movie.runtime}></MovieRuntime>
                <MovieReleaseYear releaseDate={movie.release_date}></MovieReleaseYear>
                <MovieBudget budget={movie.budget}></MovieBudget>
            </div>
        </Fragment>
    );
}

export default MovieDetail;
