import React, { useEffect, useState } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate/DetailsTemplate';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { fetchSingleItem } from 'actions';

const DetailsPage = ({ activeItem, match }) => {
  const initState = () => {
    if (!activeItem) {
      return {
        title: '',
        content: '',
        created: '',
        twitterAccountName: '',
        articleUrl: '',
      };
    }
    return activeItem;
  };
  const [activeItemData, setActiveItemData] = useState(initState());
  const activeItemId = match.params.id;

  useEffect(() => {
    const fetchItem = async () => {
      const item = await fetchSingleItem(activeItemId);
      setActiveItemData(item);
    };

    if (!activeItem) {
      fetchItem();
    } else {
      setActiveItemData(activeItem);
    }
  }, [activeItem, activeItemId]);

  return <DetailsTemplate itemData={activeItemData} />;
};

DetailsPage.propTypes = {
  activeItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    twitterAccountName: PropTypes.string,
    articleUrl: PropTypes.string,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

DetailsPage.defaultProps = {
  activeItem: undefined,
};

const mapStateToProps = (state, ownProps) => ({
  activeItem: state[ownProps.pageContext].filter(item => item._id === ownProps.match.params.id)[0],
});

export default withContext(connect(mapStateToProps)(DetailsPage));
