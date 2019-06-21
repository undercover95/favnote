import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate/DetailsTemplate';
import PropTypes from 'prop-types';

const DetailsPage = ({ location }) => {
  const itemData = location.state;

  return <DetailsTemplate itemData={itemData} />;
};

DetailsPage.propTypes = {
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
