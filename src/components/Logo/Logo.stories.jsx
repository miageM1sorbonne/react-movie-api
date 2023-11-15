import React from 'react';
import Logo from './Logo';

export default {
  component: Logo,
  title: 'components/Logo',
};

const Template = (args) => <Logo {...args} />;

export const StandardSize = Template.bind({});
StandardSize.args = {
  isSmall: false,
};

export const BigSize = Template.bind({});
BigSize.args = {
  isSmall: true,
};
