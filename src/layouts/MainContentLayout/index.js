// @flow

import React from 'react';
import { Layout } from 'antd';

import type { Node } from 'react';

type Props = {
  children: Node,
};

function MainContentLayout( props: Props ) {
  const { children } = props;
  return (
    <Layout>
      <Layout.Content>
        { children }
      </Layout.Content>
    </Layout>
  );
}

export default MainContentLayout;
