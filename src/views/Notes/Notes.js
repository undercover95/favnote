import React from 'react';
import GridTemplate from 'templates/GridTemplate/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Notes = ({ notes }) => (
  <GridTemplate>
    {notes.map(note => {
      return (
        <Card
          title={note.title}
          created={note.created}
          content={note.content}
          key={note.id}
          id={note.id}
        />
      );
    })}
  </GridTemplate>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = state => ({ notes: state.notes });
export default connect(mapStateToProps)(Notes);
