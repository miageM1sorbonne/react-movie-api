import React from 'react';
import MovieTitle from './MovieTitle';

export default {
    component: MovieTitle,
    title: 'components/MovieTitle',
};

// Story for the default case
export const Default = () => (
    <MovieTitle
        title="Avenger"
    />
);

// Story for the 'moviedetail' case
export const MovieDetail = () => (
    <MovieTitle
        title="Avenger"
        size="moviedetail"
    />
);
