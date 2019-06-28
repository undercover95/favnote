/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { userIsLogged } from 'actions';

const PrivateRoute = ({ component: Component, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={props => {
        return userIsLogged() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: routes.login, state: { from: props.location } }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
