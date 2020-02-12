import React from 'react';
import { AuthWrapper, Forgot, Login } from 'components';
import { Registration } from 'containers';

export const PATH = {
  LOGOUT: '/logout',
  LOGIN: '/login',
  FORGOT: '/forgot',
  REGISTER: '/singUp',
  DASHBOARD: '/',
  USERS: '/users'
};

export const authRoutes = [
  {
    path: '/signIn',
    type: 'public',
    exact: true,
    component: () => <AuthWrapper children={<Login />} withIcon={true} />,
    authenticated: false,
    app: false
  },
  {
    path: '/forgot',
    component: () => <AuthWrapper children={<Forgot />} withIcon={true} />,
    type: 'public',
    authenticated: false,
    app: false,
    exact: true
  },
  {
    path: '/signUp',
    component: () => <Registration />,
    type: 'public',
    authenticated: false,
    app: false,
    exact: true
  }
];

export const appRoutes = [
  //   {
  //     type: 'private',
  //     exact: true,
  //     path: '/users',
  //     app: true,
  //     component: Users
  //   },
  //   {
  //     type: 'private',
  //     exact: true,
  //     path: '/groups',
  //     app: true,
  //     component: Groups
  //   },
  //   {
  //     type: 'private',
  //     exact: true,
  //     path: '/applications',
  //     app: true,
  //     component: Applications
  //   },
  //   {
  //     type: 'private',
  //     exact: true,
  //     path: '/integrations',
  //     app: true,
  //     component: Integrations
  //   },
  //   {
  //     type: 'private',
  //     exact: true,
  //     path: '/zones',
  //     app: true,
  //     component: Zones
  //   },
  //   {
  //     type: 'private',
  //     exact: true,
  //     path: '/access-points',
  //     app: true,
  //     component: AccessPoints
  //   },
  //   {
  //     type: 'private',
  //     exact: true,
  //     path: '/webhooks',
  //     app: true,
  //     component: Webhooks
  //   },
  //   {
  //     type: 'private',
  //     exact: true,
  //     path: '/authorizations',
  //     app: true,
  //     component: Authorizations
  //   },
  //   {
  //     type: 'private',
  //     exact: true,
  //     path: '/credentials',
  //     app: true,
  //     component: Credentials
  //   },
  //   {
  //     type: 'private',
  //     exact: true,
  //     path: '/transactions',
  //     app: true,
  //     component: Transactions
  //   }
];
