import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form, ErrorMessage } from 'formik';
import validUrl from 'valid-url';

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

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: auto;
`;

const StyledTextArea = styled(Input)`
  margin: 25px 0 0px;
  height: 30vh;
  border-radius: 20px;
`;

const StyledHeading = styled(Heading)``;

const StyledButton = styled(Button)`
  margin: 70px 0 auto;
`;

const StyledInput = styled(Input)`
  margin-top: 25px;

  :first-of-type {
    margin-top: 10px;
  }
`;

const StyledErrorMsg = styled.div`
  margin: 10px 0 0;
  font-weight: ${({ theme }) => theme.bold};
  color: red;
  text-align: center;
`;

const NewItemBar = ({ isVisible, handleClose, pageContext, addItem }) => {
  const singularItemName = pageContext.slice(0, pageContext.length - 1);
  return (
    <StyledWrapper isVisible={isVisible} pageType={pageContext}>
      <StyledHeading big>Add a new {singularItemName}</StyledHeading>
      <Formik
        initialValues={{
          title: '',
          content: '',
          articleUrl: '',
          twitterAccountName: '',
        }}
        validate={values => {
          const errors = {};

          if (!values.title) {
            errors.title = 'Title is required';
          }

          if (!values.content) {
            errors.content = 'Content is required';
          }

          if (pageContext === 'articles') {
            if (!values.articleUrl) {
              errors.articleUrl = 'Article URL is required';
            } else if (!validUrl.isUri(values.articleUrl)) {
              errors.articleUrl = 'Article URL is invalid';
            }
          }

          if (pageContext === 'twitters') {
            if (!values.twitterAccountName) {
              errors.twitterAccountName = 'Twitter account name is required';
            }
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          addItem(pageContext, values);
          handleClose();
          resetForm();
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <StyledForm>
            <StyledInput
              type="text"
              name="title"
              placeholder="Enter title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <ErrorMessage name="title" component={StyledErrorMsg} />
            {pageContext === 'twitters' && (
              <>
                <StyledInput
                  type="text"
                  name="twitterAccountName"
                  placeholder="Enter twitter account name (slug)"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.twitterAccountName}
                />
                <ErrorMessage name="twitterAccountName" component={StyledErrorMsg} />
              </>
            )}
            {pageContext === 'articles' && (
              <>
                <StyledInput
                  type="text"
                  name="articleUrl"
                  placeholder="Enter article link"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.articleUrl}
                />
                <ErrorMessage name="articleUrl" component={StyledErrorMsg} />
              </>
            )}
            <StyledTextArea
              as="textarea"
              placeholder="Enter content"
              name="content"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
            />
            <ErrorMessage name="content" component={StyledErrorMsg} />
            <StyledButton type="submit" pageType={pageContext}>
              Add {singularItemName}
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
  isVisible: false,
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withContext(NewItemBar));
