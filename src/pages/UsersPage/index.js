// @flow
import React from 'react';

import { withContext } from '~/components/AppContext';

import type { Context } from '~/types/Context';

type Props = {
  appContext: Context,
};

function UsersPage( props: Props ) {
  const { appContext: { users } } = props;

  return (
    <div>
      <div>
        Users Page
      </div>
      <code>
        {JSON.stringify( users, null, 2 )}
      </code>
    </div>
  );
}

export default withContext( UsersPage );
