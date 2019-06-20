import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { routes } from 'routes';
import Notes from 'views/Notes/Notes';
import Twitters from 'views/Twitters/Twitters';
import Articles from 'views/Articles/Articles';
import DetailsPage from 'views/DetailsPage/DetailsPage';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} render={() => <Redirect to={routes.notes} />} />

        <Route exact path={routes.notes} component={Notes} />
        <Route path={routes.note} component={DetailsPage} />

        <Route exact path={routes.twitters} component={Twitters} />
        <Route path={routes.twitter} component={DetailsPage} />

        <Route exact path={routes.articles} component={Articles} />
        <Route path={routes.article} component={DetailsPage} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
