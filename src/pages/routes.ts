import React from 'react';

const HomePage = React.lazy(() => import('./home'));

export enum Paths {
  Home = '/',
}

export const routes = [
  {
    path: Paths.Home,
    exact: true,
    component: HomePage,
  },
];
