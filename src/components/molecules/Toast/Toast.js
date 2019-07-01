import React from 'react';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  padding: 20px;
  box-shadow: 0px 5px 15px -10px black;
`;

const Toast = ({ title, content }) => (
  <Wrapper>
    <Heading>{title}</Heading>
    <Paragraph>{content}</Paragraph>
  </Wrapper>
);

Toast.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

Toast.defaultProps = {
  title: '',
  content: '',
};

export default Toast;
