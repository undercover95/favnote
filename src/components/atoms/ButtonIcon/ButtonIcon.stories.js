import React from 'react';
import { storiesOf } from '@storybook/react';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';

const YellowBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.primary};
`;

storiesOf('Atoms/ButtonIcon', module)
  .addDecorator(story => <YellowBg>{story()}</YellowBg>)
  .add('Bulb', () => <ButtonIcon icon={bulbIcon} />)
  .add('Bulb Active', () => <ButtonIcon active icon={bulbIcon} />)
  .add('Logout', () => <ButtonIcon icon={logoutIcon} />)
  .add('Pen', () => <ButtonIcon icon={penIcon} />)
  .add('Plus', () => <ButtonIcon icon={plusIcon} />)
  .add('Twitter', () => <ButtonIcon icon={twitterIcon} />);
