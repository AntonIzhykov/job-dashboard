import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { App } from 'components';

const NoAuthRoute = ({ component, ...rest }) => (
  <Route
    exact
    {...rest}
    render={props =>
      !rest.authenticated ? (
        <App authenticated={true}>{React.createElement(component, props)}</App>
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default NoAuthRoute;
