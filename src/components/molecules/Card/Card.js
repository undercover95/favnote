import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  min-height: 380px;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  position: relative;
  background-color: ${({ cardType, theme }) => {
    switch (cardType) {
      case 'notes':
        return theme.primary;
      case 'twitters':
        return theme.secondary;
      case 'articles':
        return theme.tertiary;
      default:
        return theme.white;
    }
  }};

  :first-of-type {
    z-index: 999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: 0 0 5px;
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 4px solid ${({ theme }) => theme.secondary};
  border-radius: 50%;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background: ${({ theme }) => theme.white} url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: center;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

const Card = ({ id, cardType, title, content, created, twitterAccountName, articleUrl }) => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: `${cardType}/${id}`,
          state: {
            title,
            content,
            created,
            twitterAccountName,
            articleUrl,
          },
        }}
      />
    );
  }

  return (
    <StyledWrapper onClick={() => setRedirect(true)}>
      <InnerWrapper cardType={cardType}>
        <StyledHeading>{title}</StyledHeading>
        <DateInfo>{created}</DateInfo>
        {cardType === 'twitters' && (
          <StyledAvatar src={`https://avatars.io/twitter/${twitterAccountName}`} />
        )}
        {cardType === 'articles' && <StyledLinkButton href={articleUrl} />}
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>{content}</Paragraph>
        <Button secondary>Remove</Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterAccountName: PropTypes.string,
  articleUrl: PropTypes.string,
};

Card.defaultProps = {
  cardType: 'notes',
  twitterAccountName: null,
  articleUrl: null,
};

export default Card;
