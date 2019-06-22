import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logoIcon from 'assets/icons/logo.svg';
import Heading from 'components/atoms/Heading/Heading';

import SignUpForm from 'components/organisms/SignUpForm/SignUpForm';
import SignInForm from 'components/organisms/SignInForm/SignInForm';

const PageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
`;

const FormWrapper = styled.div`
  width: 360px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0 10px 30px -5px hsla(0, 0%, 0%, 0.1);
  margin-top: 20px;
  padding: 10px 10px 20px;
`;

const StyledLogo = styled.div`
  width: 140px;
  height: 140px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const AuthPage = ({ authType }) => (
  <PageWrapper>
    <StyledLogo />
    <Heading>Never forget important things</Heading>
    <FormWrapper>
      {authType === 'signIn' && <SignInForm />}
      {authType === 'signUp' && <SignUpForm />}
    </FormWrapper>
  </PageWrapper>
);

AuthPage.propTypes = {
  authType: PropTypes.string.isRequired,
};

export default AuthPage;
