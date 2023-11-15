import React from 'react';
import { WatchListProvider } from '../../providers/WatchList/WatchListState';
import MovieCard from './MovieCard';
import { MemoryRouter } from 'react-router-dom';

export default {
    component: MovieCard,
    title: 'components/MovieCard',
    decorators: [
        (Story) => (
            <WatchListProvider>
                <MemoryRouter>
                    <Story />
                </MemoryRouter>
            </WatchListProvider>
        ),
    ],
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
