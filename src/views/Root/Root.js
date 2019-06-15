import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Notes from 'views/Notes/Notes';
import Twitters from 'views/Twitters/Twitters';
import Articles from 'views/Articles/Articles';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/twitters" component={Twitters} />
        <Route path="/articles" component={Articles} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
