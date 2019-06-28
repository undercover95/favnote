import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import withContext from 'hoc/withContext';
import { removeItem as removeItemAction } from 'actions';

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
  position: relative;
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

const HorizontalWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.light};
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

const StyledLinkWrapper = styled.div`
  width: 105px;
  height: 30px;
  line-height: 30px;
  font-size: 10px;
  text-align: center;
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.bold};
  text-transform: uppercase;
  margin-right: 20px;
  background-color: ${({ pageType, theme }) => {
    switch (pageType) {
      case 'notes':
        return theme.primary;
      case 'twitters':
        return theme.secondary;
      case 'articles':
        return theme.tertiary;
      default:
        return theme.grey200;
    }
  }};

  :hover {
    opacity: 0.75;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #000;
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

const Card = ({
  _id,
  title,
  content,
  created,
  twitterAccountName,
  articleUrl,
  removeItem,
  pageContext,
}) => {
  return (
    <StyledWrapper>
      <InnerWrapper cardType={pageContext}>
        <StyledHeading>{title}</StyledHeading>
        <DateInfo>{created}</DateInfo>
        {pageContext === 'twitters' && (
          <StyledAvatar src={`https://avatars.io/twitter/${twitterAccountName}`} />
        )}
        {pageContext === 'articles' && <StyledLinkButton href={articleUrl} />}
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>{content}</Paragraph>
        <HorizontalWrapper>
          <StyledLinkWrapper pageType={pageContext}>
            <StyledLink to={`/${pageContext}/${_id}`}>Open</StyledLink>
          </StyledLinkWrapper>

          <Button secondary onClick={() => removeItem(pageContext, _id)}>
            Remove
          </Button>
        </HorizontalWrapper>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterAccountName: PropTypes.string,
  articleUrl: PropTypes.string,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  pageContext: 'notes',
  twitterAccountName: null,
  articleUrl: null,
};

const mapDispatchToProps = dispatch => ({
  removeItem: (itemType, _id) => dispatch(removeItemAction(itemType, _id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withContext(Card));
