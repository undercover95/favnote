import React from 'react';
import GridTemplate from 'templates/GridTemplate/GridTemplate';
import Card from 'components/molecules/Card/Card';

// dummy data
const twitters = [
  {
    id: 0,
    title: 'Hello Roman',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
    twitterName: 'hello_roman',
  },
  {
    id: 1,
    title: 'Redux guy',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
    twitterName: 'dan_abramov',
  },
  {
    id: 2,
    title: 'React router stuff',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
    twitterName: 'mjackson',
  },
  {
    id: 3,
    title: 'Super animacje!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days',
    twitterName: 'sarah_edo',
  },
];

const pageType = 'twitters';

const Twitters = () => (
  <GridTemplate pageType={pageType}>
    {twitters.map(twitter => {
      return (
        <Card
          cardType={pageType}
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

export default Twitters;
