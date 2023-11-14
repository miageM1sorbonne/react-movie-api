import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import requests from './request';
import MovieDetail from './Pages/MovieDetail/MovieDetail';

const Movie = () => {

    const [movie, setMovieDetail] = useState({});
    const { id } = useParams();
  
    useEffect(() => {
        const fetchMovieDetail = async () => {
            try {
                const response = await fetch(`${requests.fetchMovieDetail(id)}`);
                const data = await response.json();
                setMovieDetail(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des détails du film :', error);
            }
        };
        fetchMovieDetail();
    }, [id]);

  return (
    <>
      <MovieDetail movie={movie}></MovieDetail>
    </>
  );
};

export default Movie;