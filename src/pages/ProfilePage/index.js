// @flow
import React from 'react';

import { withContext } from '~/components/AppContext';

import type { Context } from '~/types/Context';

type Props = {
  appContext: Context,
};

function ProfilePage( props: Props ) {
  const { appContext: { user } } = props;

  return (
    <div>
      <div>
      Profile Page
      </div>
      <code>
        {JSON.stringify( user, null, 2 )}
      </code>
    </div>
  );
}

export default withContext( ProfilePage );
