// @flow

import type { Node } from 'react';

import { AUTH_STATUS } from '~/components/AppContext';

export type Context = {
  // login: ( username: string, password: string ) => void,
  // logout: () => void,
  // authStatus: $Values<typeof AUTH_STATUS>,
  user: {
    user_metadata: {
      companies: string[],
      role: string,
      groups: string[],
    }
  },
  list: [],
  projects: [],
  users: [],
  children?: Node,
};
