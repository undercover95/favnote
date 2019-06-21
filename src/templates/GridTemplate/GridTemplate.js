import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import SidebarTemplate from 'templates/SidebarTemplate/SidebarTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';

import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  position: relative;

  ${({ theme }) => {
    return css`
      @media ${theme.device.laptop} {
        padding: 25px 50px 25px 70px;
      }
      @media ${theme.device.tablet} {
        padding: 25px 25px 25px 70px;
      }
    `;
  }}
`;

const StyledGridWrapper = styled.div`
  display: grid;
  grid-gap: 80px;
  grid-template-columns: repeat(3, 1fr);

  ${({ theme }) => {
    return css`
      @media ${theme.device.laptop} {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 40px;
      }
      @media ${theme.device.tablet} {
        grid-template-columns: repeat(1, 1fr);
      }
    `;
  }}
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.grey400};
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-size: 30%;
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
  border-radius: 50%;
  z-index: 999999;
`;

const GridTemplate = ({ children, pageContext }) => {
  const [isNewItemBarVisible, setNewItemBarVisibility] = useState(false);

  return (
    <SidebarTemplate>
      <StyledWrapper>
        <StyledPageHeader>
          <Input search placeholder="Search" />
          <StyledHeading big as="h1">
            {pageContext}
          </StyledHeading>
          <StyledParagraph>6 {pageContext}</StyledParagraph>
        </StyledPageHeader>
        <StyledGridWrapper>{children}</StyledGridWrapper>
        <StyledButtonIcon
          icon={plusIcon}
          pageType={pageContext}
          onClick={() => setNewItemBarVisibility(prevVisibility => !prevVisibility)}
        />
        <NewItemBar isVisible={isNewItemBarVisible} />
      </StyledWrapper>
    </SidebarTemplate>
  );
};

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);
