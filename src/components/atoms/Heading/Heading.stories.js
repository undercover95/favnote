import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Atoms/Heading', module)
  .add('Normal', () => <Heading>Heading</Heading>)
  .add('Big', () => <Heading big>Heading</Heading>);
