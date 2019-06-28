import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchItems as fetchItemsAction } from 'actions';
import GridTemplate from 'templates/GridTemplate/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters, fetchItems }) => {
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <GridTemplate>
      {twitters.map(twitter => {
        return (
          <Card
            title={twitter.title}
            created={twitter.created}
            content={twitter.content}
            twitterAccountName={twitter.twitterAccountName}
            key={twitter._id}
            _id={twitter._id}
          />
        );
      })}
    </GridTemplate>
  );
};

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      twitterAccountName: PropTypes.string.isRequired,
    }),
  ),
  fetchItems: PropTypes.func.isRequired,
};

Twitters.defaultProps = {
  twitters: [],
};

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItemsAction('twitters')),
});

const mapStateToProps = state => ({ twitters: state.twitters });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Twitters);
