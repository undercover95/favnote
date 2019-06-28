import React, { useEffect } from 'react';
import GridTemplate from 'templates/GridTemplate/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchItems as fetchItemsAction } from 'actions';

const Notes = ({ notes, fetchItems }) => {
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <GridTemplate itemCounter={notes.length}>
      {notes.map(note => {
        return (
          <Card
            title={note.title}
            created={note.created}
            content={note.content}
            key={note._id}
            _id={note._id}
          />
        );
      })}
    </GridTemplate>
  );
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
  fetchItems: PropTypes.func.isRequired,
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = state => ({ notes: state.notes });

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItemsAction('notes')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notes);
