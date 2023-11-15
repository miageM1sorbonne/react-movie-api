import React from 'react'
import MovieImage from './MovieImage'

export default {
    component: MovieImage,
    title: 'components/MovieImage'
};

const Template = (args) => <MovieImage {...args} />;

export const Default = Template.bind({});

Default.args = {
    poster_path: "/ktejodbcdCPXbMMdnpI9BUxW6O8.jpg",
    Images: 'https://image.tmdb.org/t/p/w500'
};

