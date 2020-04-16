// @flow

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

import Layout from '~/layouts';

const ListPage = loadable( () => import( '~/pages/ListPage' ) );
// const LoginPage = loadable( () => import( '~/pages/LoginPage' ) );
const NotFoundPage = loadable( () => import( '~/pages/NotFoundPage' ) );
const ProfilePage = loadable( () => import( '~/pages/ProfilePage' ) );
const ProjectsPage = loadable( () => import( '~/pages/ProjectsPage' ) );
const UsersPage = loadable( () => import( '~/pages/UsersPage' ) );
const WelcomePage = loadable( () => import( '~/pages/WelcomePage' ) );

const EditDeveloperView = ( { match } ) => {
  const { params: { slug } } = match;
  console.log("match parrams", match);
  return <div />;
};


function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={ ListPage } />
          <Route path="/developer/documentation" component={ ListPage } />
          <Route exact path="/developer/en/api/dummy1/intro" component={ ProjectsPage } />
          <Route exact path="/developer/en/api/dummy1/guide" component={ ProjectsPage } />
          <Route exact path="/developer/en/api/dummy1/reference" component={ ProjectsPage } />
          <Route component={ NotFoundPage } />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
