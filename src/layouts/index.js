// @flow

import React from 'react';
import { withRouter} from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import type { Location } from 'react-router-dom';
import type { Node } from 'react';

import { withContext } from '~/components/AppContext';

import DashboardLayout from './DashboardLayout';
import MainContentLayout from './MainContentLayout';

import type { Context } from '~/types/Context';

type Props = {
  appContext: Context,
  location: Location,
  // prevLocation: Location,
  children: Node,
}

function Layout( props: Props ) {
  const { children, appContext: { authStatus }, location: { pathname } } = props;

  const isOnProtectedRoute = () => {
    // list protected routes here and return true
    if ( /^\/projects$/i.test( pathname ) ) return true;
    // ... other protected routes

    return false;
  };

  const dynamicLayout = () => {
    // default layout
    const DynamicLayout = DashboardLayout;

    // list dynamic layouts according to pathname here and set DynamicLayout accordingly
    // if ( /^\/login/i.test( pathname ) ) {
    //   DynamicLayout = AuthLayout;
    // }
    // if ( /^\/(projects|users|profile|developer)/i.test( pathname ) ) {
    //   DynamicLayout = DashboardLayout;
    // }
    // ... other layouts

    // redirect to login page if user is on a protected route and user is not authorized
    // if ( isOnProtectedRoute() && authStatus !== AUTH_STATUS.SUCCESS ) {
    //   return <Redirect to="/login" />;
    // }

    // // redirect to main page if user is on login page and user is already authorized
    // if ( DynamicLayout === AuthLayout && authStatus === AUTH_STATUS.SUCCESS ) {
    //   return <Redirect to="/" />;
    // }

    // in other cases render DynamicLayout
    return (
      <DynamicLayout>
        { children }
      </DynamicLayout>
    );
  };

  return (
    <>
      <Helmet />
      { dynamicLayout() }
    </>
  );
}

export default withRouter( withContext( Layout ) );
