import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';

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

          <PrivateRoute exact path={routes.notes} component={Notes} />
          <PrivateRoute path={routes.note} component={DetailsPage} />

          <PrivateRoute exact path={routes.twitters} component={Twitters} />
          <PrivateRoute path={routes.twitter} component={DetailsPage} />

          <PrivateRoute exact path={routes.articles} component={Articles} />
          <PrivateRoute path={routes.article} component={DetailsPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
