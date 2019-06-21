import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from 'components/organisms/Sidebar/Sidebar';

const SidebarTemplate = ({ children }) => (
  <div>
    <Sidebar />
    {children}
  </div>
);

SidebarTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SidebarTemplate;
