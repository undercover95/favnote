import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from 'components/organisms/Sidebar/Sidebar';

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
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

SidebarTemplate.defaultProps = {
  pageType: 'notes',
};

export default SidebarTemplate;
