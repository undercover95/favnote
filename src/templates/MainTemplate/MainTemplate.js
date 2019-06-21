import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import PageContext from 'context';

const MainTemplate = ({ children, ...props }) => {
  const [pageType, setPageType] = useState('notes');

  useEffect(() => {
    const pageTypes = ['twitters', 'articles', 'notes'];
    const {
      location: { pathname },
    } = props;

    const [currentPage] = pageTypes.filter(page => pathname.includes(page));

    setPageType(currentPage);
  }, [props]);

  return (
    <div>
      <PageContext.Provider value={pageType}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PageContext.Provider>
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(MainTemplate);
