import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

export default {
    component: NavBar,
    title: 'components/NavBar',
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
};

const Template = () => <NavBar />;

export const Default = Template.bind({});
