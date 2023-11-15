import React from 'react';
import MovieDescription from './MovieDescription';

export default {
    component: MovieDescription,
    title: 'components/MovieDescription'
};

const Template = (args) => <MovieDescription {...args} />;

export const Default = Template.bind({});
Default.args = {
    children : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed tincidunt ultricies, nunc nunc ultricies nunc, vitae ultrices n'
};