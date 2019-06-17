import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const pageType = 'note';

const Notes = () => (
  <UserPageTemplate pageType={pageType}>
    <Card cardType={pageType} />
    <Card cardType={pageType} />
    <Card cardType={pageType} />
    <Card cardType={pageType} />
    <Card cardType={pageType} />
    <Card cardType={pageType} />
  </UserPageTemplate>
);

export default Notes;
