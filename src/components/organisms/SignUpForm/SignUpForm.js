import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from 'routes';
import { register as registerAction } from 'actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledInput = styled(Input)`
  margin-top: 25px;

  :first-of-type {
    margin-top: 10px;
  }
`;

const StyledButton = styled(Button)`
  margin: 30px 0 auto;
  background-color: ${({ theme }) => theme.primary};
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.bold};
  text-decoration: underline;
  color: black;
  display: #333;
`;

const StyledLinkWrapper = styled.div`
  margin-top: ${({ marginTop }) => marginTop || '0px'};
`;

const StyledErrorMsg = styled.div`
  margin: 10px 0 0;
  font-weight: ${({ theme }) => theme.bold};
  color: red;
  text-align: center;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 0;
`;

const StyledSmallHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const MessageWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const SignUpForm = ({ register, userRegistered }) => (
  <>
    {userRegistered && (
      <MessageWrapper>
        <StyledHeading>Registered successfully!</StyledHeading>
        <StyledSmallHeading>
          Now you can <StyledLink to={routes.login}>sing in.</StyledLink>
        </StyledSmallHeading>
      </MessageWrapper>
    )}
    <Heading big>Sign up</Heading>
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validate={values => {
        const errors = {};

        if (!values.username) {
          errors.username = 'Username is required';
        }

        if (!values.password) {
          errors.password = 'Password is required';
        }

        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        register(values.username, values.password);
        resetForm();
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <StyledForm>
          <StyledInput
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
          <ErrorMessage name="username" component={StyledErrorMsg} />
          <StyledInput
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <ErrorMessage name="password" component={StyledErrorMsg} />
          <StyledButton type="submit">Sign up</StyledButton>
          <StyledLinkWrapper marginTop="40px">
            <StyledLink to={routes.login}>Sign in!</StyledLink>
          </StyledLinkWrapper>
        </StyledForm>
      )}
    </Formik>
  </>
);

SignUpForm.propTypes = {
  register: PropTypes.func.isRequired,
  userRegistered: PropTypes.bool,
};

SignUpForm.defaultProps = {
  userRegistered: false,
};

const mapDispatchToProps = dispatch => ({
  register: (username, password) => dispatch(registerAction(username, password)),
});

const mapStateToProps = state => ({
  userRegistered: state.userRegistered,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpForm);
