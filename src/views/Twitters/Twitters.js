import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GridTemplate from 'templates/GridTemplate/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
  <GridTemplate>
    {twitters.map(twitter => {
      return (
        <Card
          title={twitter.title}
          created={twitter.created}
          content={twitter.content}
          twitterAccountName={twitter.twitterName}
          key={twitter.id}
          id={twitter.id}
        />
      );
    })}
  </GridTemplate>
);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = state => ({ twitters: state.twitters });
export default connect(mapStateToProps)(Twitters);
