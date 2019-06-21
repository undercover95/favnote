import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SidebarTemplate from 'templates/SidebarTemplate/SidebarTemplate';
import styled from 'styled-components';
import withContext from 'hoc/withContext';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  padding: 50px 150px 25px 70px;
  max-width: 800px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentWrapper = styled.div`
  margin: 50px 0;
`;

const FooterWrapper = styled.div``;

const StyledAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const StyledButton = styled(Button)`
  display: block;
  line-height: 47px;
  text-align: center;
  text-decoration: none;
  color: black;
  position: relative;
  background-color: ${({ pageType, theme }) => {
    switch (pageType) {
      case 'twitters':
        return theme.secondary;
      case 'articles':
        return theme.tertiary;
      case 'notes':
        return theme.primary;
      default:
        return theme.primary;
    }
  }};
`;

const StyledHeading = styled(Heading)`
  margin: 0;
`;

const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: 5px 0 0;
  color: ${({ theme }) => theme.grey400};
`;

const StyledLink = styled.a`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.bold};
  text-decoration: underline;
  color: black;
  display: block;
`;

const DetailsTemplate = ({ pageContext, itemData }) => (
  <SidebarTemplate pageType={pageContext}>
    <StyledWrapper>
      <HeaderWrapper>
        <div>
          <StyledHeading big>{itemData.title}</StyledHeading>
          <DateInfo>Created: {itemData.created}</DateInfo>
        </div>
        {pageContext === 'twitters' && (
          <StyledAvatar src={`https://avatars.io/twitter/${itemData.twitterAccountName}`} />
        )}
      </HeaderWrapper>
      <ContentWrapper>
        <p>{itemData.content}</p>
        {pageContext === 'articles' && (
          <StyledLink href={`http://${itemData.articleUrl}`}>Open this article</StyledLink>
        )}
      </ContentWrapper>
      <FooterWrapper>
        <StyledButton as={Link} to="/" pageType={pageContext}>
          Save / Close
        </StyledButton>
      </FooterWrapper>
    </StyledWrapper>
  </SidebarTemplate>
);

DetailsTemplate.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  itemData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    twitterAccountName: PropTypes.string,
    articleUrl: PropTypes.string,
  }).isRequired,
};

DetailsTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(DetailsTemplate);
