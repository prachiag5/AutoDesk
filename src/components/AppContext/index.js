// @flow

import React from 'react';

import type { ComponentType } from 'react';
import type { Context } from '~/types/Context';

export const AUTH_STATUS = {
  NONE: 0,
  AUTHENTICATING: 1,
  SUCCESS: 2,
  FAIL: -1,
};

type Props = {};

const AppContext = React.createContext<{}>( {} );

// export context
export default AppContext;

// export helper withContext function
export const withContext = ( PassedComponent: ComponentType<any> ) => ( props: Props ) => (
  <AppContext.Consumer>
    { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
    { context => <PassedComponent appContext={ context } { ...props } /> }
  </AppContext.Consumer>
);

// export context provider
export class AppContextProvider extends React.PureComponent<Context> {
  render() {
    const { children } = this.props;
    return (
      <AppContext.Provider value={ this.props }>
        { children }
      </AppContext.Provider>
    );
  }
}
