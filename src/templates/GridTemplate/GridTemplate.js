import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SidebarTemplate from 'templates/SidebarTemplate/SidebarTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const StyledGridWrapper = styled.div`
  display: grid;
  grid-gap: 85px;
  grid-template-columns: repeat(3, 1fr);
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

const GridTemplate = ({ children, pageType }) => (
  <SidebarTemplate pageType={pageType}>
    <StyledWrapper>
      <StyledPageHeader>
        <Input search placeholder="Search" />
        <StyledHeading big as="h1">
          {pageType}
        </StyledHeading>
        <StyledParagraph>6 {pageType}</StyledParagraph>
      </StyledPageHeader>
      <StyledGridWrapper>{children}</StyledGridWrapper>
    </StyledWrapper>
  </SidebarTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageType: 'notes',
};

export default GridTemplate;
