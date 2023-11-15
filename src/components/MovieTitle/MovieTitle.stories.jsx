import React from 'react';
import MovieTitle from './MovieTitle';

export default {
    component: MovieTitle,
    title: 'components/MovieTitle',
};

const Template = (args) => <MovieTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Avenger',
};
