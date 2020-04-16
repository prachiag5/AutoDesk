// @flow

import React from 'react';
import {
  Layout, Menu, Button,
} from 'antd';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import { withContext } from '~/components/AppContext';

import type { Context } from '~/types/Context';
import './dashboard.css';

const { Header, Content, Sider } = Layout;

type Props = {
  children: Node,
  appContext: Context,
};

function DashboardLayout( props: Props ) {
  const { appContext: { logout } } = props;
  const { children } = props;

  return (
    <Layout style={ { height: '100vh' } }>
      <Header className="header">
        <h2 style={ { color: '#ffffff' } }> DOCUMENTATION </h2>
      </Header>
      <Content style={ { padding: '0 50px' } }>
        <Layout style={ { padding: '24px 0' } }>
          <Content style={ { padding: '0 24px' } }>
            {children}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}

export default withContext( DashboardLayout );
