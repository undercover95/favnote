import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Atoms/Input', module)
  .add('Primary', () => <Input placeholder="Login" />)
  .add('Search', () => <Input search placeholder="Search" />);
