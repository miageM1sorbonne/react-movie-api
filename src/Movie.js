import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import requests from './request';
import MovieCast from './components/MovieDetails/MovieCast/MovieCast';
import MovieDetail from './Pages/MovieDetail/MovieDetail';

const Movie = () => {

    const [movie, setMovieDetail] = useState({});
    const [director, setMovieDirector] = useState("");
    const [credits, setMovieCredits] = useState({});
    const { id } = useParams();
  
    useEffect(() => {
      const fetchMovieData = async () => {
          try {
              // Fetch movie details
              const detailResponse = await fetch(requests.fetchMovieDetail(id));
              const detailData = await detailResponse.json();
              setMovieDetail(detailData);
  
              // Fetch movie credits
              const creditsResponse = await fetch(requests.fetchMovieCredits(id));
              const creditsData = await creditsResponse.json();
              setMovieCredits(creditsData);
              
              const director = creditsData.crew.find(member => member.job === 'Director')?.name || 'Unknown Director';
              setMovieDirector(director);
            
          } catch (error) {
              console.error('Erreur lors de la récupération des données du film :', error);
          }
      };
  
      fetchMovieData();
  }, [id]);
  

  return (
    <>
      <MovieDetail movie={movie} director={director}></MovieDetail>
    </>
  );
};

export default Movie;