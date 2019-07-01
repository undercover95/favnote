import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { theme as mainTheme } from 'theme/mainTheme';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import PageContext from 'context';

const StyledToastContainer = styled(ToastContainer)`
  .custom-toast {
    background-color: #fff;
    padding: 20px;
    font-family: inherit;
    color: #333;
  }

  .Toastify__close-button {
    color: #444;
  }

  .Toastify__toast--success {
    border-left: 4px solid ${({ theme }) => theme.notification.success};
  }

  .Toastify__toast--info {
    border-left: 4px solid ${({ theme }) => theme.notification.info};
  }

  .Toastify__toast--warn {
    border-left: 4px solid ${({ theme }) => theme.notification.warn};
  }

  .Toastify__toast--error {
    border-left: 4px solid ${({ theme }) => theme.notification.error};
  }
`;

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
        <ThemeProvider theme={mainTheme}>
          <>
            {children}
            <StyledToastContainer
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
