import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'theme/toast.css';
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
        <ThemeProvider theme={theme}>
          <>
            {children}
            <ToastContainer
              autoClose={4000}
              position="top-right"
              transition={Zoom}
              hideProgressBar
              className="custom-toast-container"
              toastClassName="custom-toast"
            />
          </>
        </ThemeProvider>
      </PageContext.Provider>
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(MainTemplate);
