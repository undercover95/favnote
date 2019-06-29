import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoIcon from 'assets/icons/logo.svg';
import { logOutUser as logOutUserAction } from 'actions';

const StyledSidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 150px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
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

const StyledLogo = styled.div`
  width: 70px;
  height: 70px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const IconsWrapper = styled.div`
  margin-top: 30px;
`;

const LogoutWrapper = styled.div`
  margin-top: auto;
`;

const Sidebar = ({ pageContext, logoutUser, userIsLogged }) => {
  if (!userIsLogged) {
    return <Redirect to={routes.login} />;
  }
  return (
    <StyledSidebar pageType={pageContext}>
      <StyledLogo exact as={NavLink} to="/" />
      <IconsWrapper>
        <ButtonIcon as={NavLink} to={routes.notes} icon={penIcon} activeclass="active" />
        <ButtonIcon as={NavLink} to={routes.twitters} icon={twitterIcon} activeclass="active" />
        <ButtonIcon as={NavLink} to={routes.articles} icon={bulbIcon} activeclass="active" />
      </IconsWrapper>
      <LogoutWrapper>
        <ButtonIcon icon={logoutIcon} onClick={logoutUser} />
      </LogoutWrapper>
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  logoutUser: PropTypes.func.isRequired,
  userIsLogged: PropTypes.bool,
};

Sidebar.defaultProps = {
  pageContext: 'notes',
  userIsLogged: false,
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logOutUserAction()),
});

const mapStateToProps = state => ({
  userIsLogged: state.userIsLogged,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withContext(Sidebar));
