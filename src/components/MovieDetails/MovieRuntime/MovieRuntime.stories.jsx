// MovieRuntime.stories.jsx
import React from 'react';
import MovieRuntime from './MovieRuntime';

export default {
 title: 'MovieRuntime',
 component: MovieRuntime
};

const Template = (args) => <MovieRuntime {...args} />;

export const Default = Template.bind({});
Default.args = {
 runtime: 190,
};