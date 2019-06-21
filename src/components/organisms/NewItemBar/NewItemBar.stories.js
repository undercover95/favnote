import React from 'react';
import { storiesOf } from '@storybook/react';
import NewItemBar from './NewItemBar';

storiesOf('Organisms/NewItemBar', module)
  .add('Note', () => <NewItemBar pageContext="notes" />)
  .add('Twitter', () => <NewItemBar pageContext="twitters" />)
  .add('Article', () => <NewItemBar pageContext="articles" />);
