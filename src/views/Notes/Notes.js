import React from 'react';
import GridTemplate from 'templates/GridTemplate/GridTemplate';
import Card from 'components/molecules/Card/Card';

// dummy data
const notes = [
  {
    id: 0,
    title: 'Wake me up when Vue ends',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    id: 1,
    title: 'Como es An Gular?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    id: 2,
    title: 'Du bist Reactish',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
  },
  {
    id: 3,
    title: 'Reactuj się kto moze!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days',
  },
];

const pageType = 'notes';

const Notes = () => (
  <GridTemplate pageType={pageType}>
    {notes.map(note => {
      return (
        <Card
          cardType={pageType}
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

export default Notes;
