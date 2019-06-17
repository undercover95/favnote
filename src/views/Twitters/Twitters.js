import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

// dummy data
const twitters = [
  {
    title: 'Hello Roman',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
    twitterName: 'hello_roman',
  },
  {
    title: 'Redux guy',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
    twitterName: 'dan_abramov',
  },
  {
    title: 'React router stuff',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
    twitterName: 'mjackson',
  },
  {
    title: 'Super animacje!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days',
    twitterName: 'sarah_edo',
  },
];

const pageType = 'twitter';

const Twitters = () => (
  <UserPageTemplate pageType={pageType}>
    {twitters.map(twitter => {
      return (
        <Card
          cardType={pageType}
          title={twitter.title}
          created={twitter.created}
          content={twitter.content}
          twitterAccountName={twitter.twitterName}
          key={twitter.title}
        />
      );
    })}
  </UserPageTemplate>
);

export default Twitters;
