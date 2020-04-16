// @flow
import React from 'react';

import { withContext } from '~/components/AppContext';

import type { Context } from '~/types/Context';

type Props = {
  appContext: Context,
};

function ProjectsPage( props: Props ) {
  const { appContext: { projects } } = props;

  return (
    <div>
      <h2>
        Overview
      </h2>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  );
}

export default withContext( ProjectsPage );
