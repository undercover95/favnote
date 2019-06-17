import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const pageType = 'article';

// dummy data
const articles = [
  {
    title: 'React on my mind',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
    created: '1 day',
  },
  {
    title: 'Wish you React',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
    created: '1 day',
  },
  {
    title: 'You gave React a bad name',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
    created: '5 days',
  },
  {
    title: 'Is it React you looking for?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
    created: '10 days',
  },
];

const Articles = () => (
  <UserPageTemplate pageType={pageType}>
    {articles.map(article => {
      return (
        <Card
          cardType={pageType}
          title={article.title}
          created={article.created}
          content={article.content}
          articleUrl={article.articleUrl}
          key={article.title}
        />
      );
    })}
  </UserPageTemplate>
);

export default Articles;
