import { Fragment } from "react";
import MovieCard from '../../components/MovieCard/MovieCard';
import './MovieDetail.css';

const MovieDetail = ({ movie }) => {

    const containerStyle = {
        backgroundImage: `url(${process.env.REACT_APP_ImagesLink}${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    };

    return (    
        <Fragment>
            <div className="movieinfo-container" style={containerStyle}>
            <   div className="movieinfo-content">
                    <div className="movieinfo-thumb">
                        <MovieCard movie={movie} Images={process.env.REACT_APP_ImagesLink } />
                    </div>
                    <div className="movieinfo-text">
                        <h1>{movie.title}</h1>
                        <h3>PLOT</h3>
                        <p>{movie.overview}</p>
                        <div className="rating-director">
                            <div>
                                <h3>IMDB RATING</h3>
                                <div className="score">{movie.vote_average}</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    );
}

export default MovieDetail;
