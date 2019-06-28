import React, { useEffect } from 'react';
import GridTemplate from 'templates/GridTemplate/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchItems as fetchItemsAction } from 'actions';

const Articles = ({ articles, fetchItems }) => {
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <GridTemplate>
      {articles.map(article => {
        return (
          <Card
            title={article.title}
            created={article.created}
            content={article.content}
            articleUrl={article.articleUrl}
            key={article._id}
            _id={article._id}
          />
        );
      })}
    </GridTemplate>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
    }),
  ),
  fetchItems: PropTypes.func.isRequired,
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = state => ({ articles: state.articles });

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItemsAction('articles')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles);
