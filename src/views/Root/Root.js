import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';
import { routes } from 'routes';
import store from 'store';

import AuthPage from 'views/AuthPage/AuthPage';
import Notes from 'views/Notes/Notes';
import Twitters from 'views/Twitters/Twitters';
import Articles from 'views/Articles/Articles';
import DetailsPage from 'views/DetailsPage/DetailsPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.login} render={() => <AuthPage authType="signIn" />} />
          <Route exact path={routes.register} render={() => <AuthPage authType="signUp" />} />

          <Route exact path={routes.home} render={() => <Redirect to={routes.notes} />} />

          <Route exact path={routes.notes} component={Notes} />
          <Route path={routes.note} component={DetailsPage} />

          <Route exact path={routes.twitters} component={Twitters} />
          <Route path={routes.twitter} component={DetailsPage} />

          <Route exact path={routes.articles} component={Articles} />
          <Route path={routes.article} component={DetailsPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
