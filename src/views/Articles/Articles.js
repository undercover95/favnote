import React from 'react';
import GridTemplate from 'templates/GridTemplate/GridTemplate';
import Card from 'components/molecules/Card/Card';

const pageType = 'articles';

// dummy data
const articles = [
  {
    id: 0,
    title: 'React on my mind',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
    created: '1 day',
  },
  {
    id: 1,
    title: 'Wish you React',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
    created: '1 day',
  },
  {
    id: 2,
    title: 'You gave React a bad name',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
    created: '5 days',
  },
  {
    id: 3,
    title: 'Is it React you looking for?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
    created: '10 days',
  },
];

const Articles = () => (
  <GridTemplate pageType={pageType}>
    {articles.map(article => {
      return (
        <Card
          cardType={pageType}
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

export default Articles;
