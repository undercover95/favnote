import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

// dummy data
const notes = [
  {
    title: 'Wake me up when Vue ends',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    title: 'Como es An Gular?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    title: 'Du bist Reactish',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
  },
  {
    title: 'Reactuj się kto moze!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days',
  },
];

const pageType = 'note';

const Notes = () => (
  <UserPageTemplate pageType={pageType}>
    {notes.map(note => {
      return (
        <Card
          cardType={pageType}
          title={note.title}
          created={note.created}
          content={note.content}
          key={note.title}
        />
      );
    })}
  </UserPageTemplate>
);

export default Notes;
