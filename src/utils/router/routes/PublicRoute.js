import React from 'react';
import { Route } from 'react-router-dom';
import { App } from 'components'; // Remove App wrap if you wish

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    exact
    {...rest}
    render={props => (
      <App authenticated={false}>
        <Component {...props} />
      </App>
    )}
  />
);

export default PublicRoute;
