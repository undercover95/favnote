import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from 'routes';

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

const SignUpForm = () => (
  <>
    <Heading big>Sign up</Heading>
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      {() => (
        <StyledForm>
          <StyledInput name="username" type="text" placeholder="Username" />
          <StyledInput name="password" type="password" placeholder="Password" />
          <StyledButton type="submit">Sign up</StyledButton>
          <StyledLink to={routes.login}>Sign in!</StyledLink>
        </StyledForm>
      )}
    </Formik>
  </>
);

export default SignUpForm;
