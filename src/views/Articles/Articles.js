import React from 'react';
import GridTemplate from 'templates/GridTemplate/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Articles = ({ articles }) => (
  <GridTemplate>
    {articles.map(article => {
      return (
        <Card
          title={article.title}
          created={article.created}
          content={article.content}
          articleUrl={article.articleUrl}
          key={article.id}
          id={article.id}
        />
      );
    })}
  </GridTemplate>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = state => ({ articles: state.articles });
export default connect(mapStateToProps)(Articles);
