import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoIcon from 'assets/icons/logo.svg';

const StyledSidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 153px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ pageType, theme }) => {
    switch (pageType) {
      case 'twitter':
        return theme.secondary;
      case 'article':
        return theme.tertiary;
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

const Sidebar = ({ pageType }) => (
  <StyledSidebar pageType={pageType}>
    <StyledLogo exact as={NavLink} to="/" />
    <IconsWrapper>
      <ButtonIcon exact as={NavLink} to="/" icon={penIcon} activeclass="active" />
      <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />
      <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="active" />
    </IconsWrapper>
    <LogoutWrapper>
      <ButtonIcon as={NavLink} to="/login" icon={logoutIcon} />
    </LogoutWrapper>
  </StyledSidebar>
);

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Sidebar.defaultProps = {
  pageType: 'note',
};

export default Sidebar;
