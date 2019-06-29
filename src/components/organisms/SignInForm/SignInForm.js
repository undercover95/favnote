import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { routes } from 'routes';
import { authenticate as authenticateAction } from 'actions';
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
  margin-top: 40px;
`;

const StyledErrorMsg = styled.div`
  margin: 10px 0 0;
  font-weight: ${({ theme }) => theme.bold};
  color: red;
  text-align: center;
`;

const SignInForm = ({ authenticate, userIsLogged }) => (
  <>
    <Heading big>Sign in</Heading>
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
      onSubmit={values => {
        authenticate(values.username, values.password);
      }}
    >
      {({ values, handleChange, handleBlur }) => {
        if (userIsLogged) {
          return <Redirect to={routes.home} />;
        }
        return (
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

            <StyledButton type="submit">Sign in</StyledButton>
            <StyledLink to={routes.register}>Sign up!</StyledLink>
          </StyledForm>
        );
      }}
    </Formik>
  </>
);

SignInForm.propTypes = {
  authenticate: PropTypes.func.isRequired,
  userIsLogged: PropTypes.bool,
};

SignInForm.defaultProps = {
  userIsLogged: false,
};

const mapStateToProps = state => ({
  userIsLogged: state.userIsLogged,
});

const mapDispatchToProps = dispatch => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInForm);
