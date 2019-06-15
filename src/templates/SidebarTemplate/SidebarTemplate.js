import React from 'react';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import PropTypes from 'prop-types';

const SidebarTemplate = ({ children, pageType }) => (
  <div>
    <Sidebar pageType={pageType} />
    {children}
  </div>
);

SidebarTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

SidebarTemplate.propTypes = {
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

SidebarTemplate.defaultProps = {
  pageType: 'note',
};

export default SidebarTemplate;
