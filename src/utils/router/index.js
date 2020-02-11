import React, { Component } from 'react';

import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import { ContentWrapper } from 'containers';
import { Login, NotFound } from 'components';

import RenderRoute from './routes';
import { authRoutes, appRoutes } from './_routes';
import { history } from 'store';
import { AuthWrapper } from '../../components';

const mergedRoutes = [...authRoutes, ...appRoutes ];

class AppRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <ContentWrapper isAuthenticated={this.props.authenticated}>
          <Switch>
            {mergedRoutes.map((route, i) => (
              <RenderRoute authenticated={this.props.authenticated} key={i} {...route} />
            ))}
            <RenderRoute authenticated={!this.props.authenticated} exact path="/" component={() => <AuthWrapper children={<Login/>} />} />
            <Route component={NotFound} />
          </Switch>
        </ContentWrapper>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.isAuthenticated
  };
}

export default connect(
  mapStateToProps,
  {}
)(AppRouter);
