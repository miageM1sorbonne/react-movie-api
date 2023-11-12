import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from './Button';

export default {
  component: Button,
  title: 'components/Button',
  decorators: [(Story) => <Router>{Story()}</Router>],
  argTypes: {
    type: { control: 'text' },
  },
};

export const Default = (args) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <Button {...args} onClick={handleToggle} type={`toggle ${isActive ? 'active' : ''}`}>
      {isActive ? '✓' : '+'}
    </Button>
  );
};

Default.args = {
  type: 'toggle',
  children: '+',
};
