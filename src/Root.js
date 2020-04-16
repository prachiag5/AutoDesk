// @flow

import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
// import { ApolloProvider } from 'react-apollo';
import Router from './Router';
import { AppContextProvider, AUTH_STATUS } from '~/components/AppContext';

// configure apollo client
// const url: string = process.env.HASURA_ENDPOINT ? process.env.HASURA_ENDPOINT : '';
// const createApolloClient = () => new ApolloClient( {
//   link: split(
//   // split based on operation type
//     ( { query } ) => {
//       const { kind, operation } = getMainDefinition( query );
//       return kind === 'OperationDefinition' && operation === 'subscription';
//     },
//     new WebSocketLink( {
//       uri: `ws://${ url }`,
//       options: {
//         reconnect: true,
//       },
//     } ),
//     new HttpLink( {
//       uri: `http://${ url }`,
//     } ),
//   ),
//   cache: new InMemoryCache(),
// } );

function Root() {
  // const client = createApolloClient();
  // console.log( 'client', client );
  // const [ authStatus, setAuthStatus ] = useState( AUTH_STATUS.NONE );

  // This is where we temporarily supply a context provider
  // so that we can override the context's behaviours.
  // Usually this is done in a proper "container" module that
  // handles all the side-effects for this application.
  return (
    <AppContextProvider
      // login={ ( username, password ) => {
      //   setAuthStatus( AUTH_STATUS.AUTHENTICATING );
      //   setTimeout( () => {
      //     if ( username === 'hello' && password === 'world' ) {
      //       setAuthStatus( AUTH_STATUS.SUCCESS );
      //     } else {
      //       setAuthStatus( AUTH_STATUS.FAIL );
      //     }
      //   }, 100 );
      // } }
      // logout={ () => {
      //   setAuthStatus( AUTH_STATUS.NONE );
      // } }
      // authStatus={ authStatus }
    >
      {/* <ApolloProvider client={ client }> */}
      <Router />
      {/* </ApolloProvider> */}
    </AppContextProvider>
  );
}

export default hot( Root );
