import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';

import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  border-left: 10px solid
    ${({ pageType, theme }) => {
      switch (pageType) {
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
  z-index: 9999;
  position: fixed;
  padding: 100px 50px;
  background-color: white;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  right: 0;
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '110%')});
  transition: transform 0.5s ease-in-out;
  top: 0;
  height: 100vh;
  width: 600px;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 auto;
  height: 30vh;
  border-radius: 20px;
`;

const StyledButton = styled(Button)`
  margin: 0 0 auto;
`;

const StyledInput = styled(Input)`
  margin-top: 25px;
`;

const NewItemBar = ({ pageContext, isVisible, addItem }) => {
  const singularItemName = pageContext.slice(0, pageContext.length - 1);
  return (
    <StyledWrapper isVisible={isVisible} pageType={pageContext}>
      <Heading big>Add a new {singularItemName}</Heading>
      <StyledInput placeholder="Enter title" />
      {pageContext === 'twitters' && <StyledInput placeholder="Enter twitter account name" />}
      {pageContext === 'articles' && <StyledInput placeholder="Enter article link" />}
      <StyledTextArea as="textarea" placeholder="Enter content" />
      <StyledButton
        onClick={() =>
          addItem(pageContext, {
            title: 'title',
            content: 'content',
          })
        }
        pageType={pageContext}
      >
        Add {singularItemName}
      </StyledButton>
    </StyledWrapper>
  );
};

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withContext(NewItemBar));
