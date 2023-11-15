import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import requests from './request';
import MovieDetail from './components/MovieDetail/MovieDetail';

const Movie = () => {

    const [movie, setMovieDetail] = useState({});
    // const [credits, setMovieCredits] = useState({});
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

      /*
      const fetchMovieCredits = async () => {
        try {
            const response = await fetch(`${requests.fetchMovieCredits(id)}`);
            const data = await response.json();
            //const director = data.crew.find(member => member.job === 'Director').name;
            console.log(director);
            setMovieCredits(director);
            
        } catch (error) {
            console.error('Erreur lors de la récupération des crédits du film :', error);
        }
      };
      */

      fetchMovieDetail();
      //fetchMovieCredits();

  }, [id]);

  return (
    <>
      <MovieDetail movie={movie}></MovieDetail>
    </>
  );
};

export default Movie;