import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const pageType = 'twitter';

const Twitters = () => (
  <UserPageTemplate pageType={pageType}>
    <Card cardType={pageType} />
    <Card cardType={pageType} />
    <Card cardType={pageType} />
    <Card cardType={pageType} />
    <Card cardType={pageType} />
    <Card cardType={pageType} />
  </UserPageTemplate>
);

export default Twitters;
