import React from 'react'
import MovieCard from './MovieCard'

export default {
    component: MovieCard,
    title: 'components/MovieCard'
};

const Template = (args) => <MovieCard {...args} />;

export const Default = Template.bind({});

Default.args = {
    movie: {   
        "poster_path": "/ktejodbcdCPXbMMdnpI9BUxW6O8.jpg",
        "title": "Dilwale Dulhania Le Jayenge",
    },
    Images: 'https://image.tmdb.org/t/p/w500'
};

