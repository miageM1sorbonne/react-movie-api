import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MovieListByGenre from './MovieListByGenre';

export default {
    component: MovieListByGenre,
    title: 'components/MovieListByGenre',
    decorators: [
        (Story) => (
            <Router>
                <Story />
            </Router>
        ),
    ],
};

const Template = (args) => <MovieListByGenre {...args} />;

export const Default = Template.bind({});
Default.args = {
    genreUrl: `https://api.themoviedb.org/3//trending/all/week?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
    genre: 'Trending',
};
