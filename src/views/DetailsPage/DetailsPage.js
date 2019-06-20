import React, { useState, useEffect } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate/DetailsTemplate';
import { routes } from 'routes';
import PropTypes from 'prop-types';

const DetailsPage = ({ match, location }) => {
  const [pageType, setPageType] = useState('notes');
  const itemData = location.state;

  // componentDidMount && componentDidUpdate at once
  useEffect(() => {
    switch (match.path) {
      case routes.note:
        setPageType('notes');
        break;
      case routes.twitter:
        setPageType('twitters');
        break;
      case routes.article:
        setPageType('articles');
        break;
      default:
        setPageType('notes');
        break;
    }
  }, [match.path]);

  return <DetailsTemplate pageType={pageType} itemData={itemData} />;
};

DetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      twitterAccountName: PropTypes.string,
      articleUrl: PropTypes.string,
    }),
  }).isRequired,
};

export default DetailsPage;
