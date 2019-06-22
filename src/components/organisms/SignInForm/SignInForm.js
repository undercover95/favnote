import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
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

const SignInForm = () => (
  <>
    <Heading big>Sign in</Heading>
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        axios
          .post('http://localhost:9000/api/user/login', {
            username: values.username,
            password: values.password,
          })
          .then(() => {
            console.log('Login successful');
          })
          .catch(err => {
            console.log(`Login failed.\n${err}`);
          });
      }}
    >
      {() => (
        <StyledForm>
          <StyledInput name="username" type="text" placeholder="Username" />
          <StyledInput name="password" type="password" placeholder="Password" />
          <StyledButton type="submit">Sign in</StyledButton>
          <StyledLink to={routes.register}>Sign up!</StyledLink>
        </StyledForm>
      )}
    </Formik>
  </>
);

export default SignInForm;
