import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { App } from 'components';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return rest.authenticated ? (
        rest.app ? (
          <App authenticated={true}>
            <Component {...props} />
          </App>
        ) : (
          <Component {...props} />
        )
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      );
    }}
  />
);

export default PrivateRoute;
