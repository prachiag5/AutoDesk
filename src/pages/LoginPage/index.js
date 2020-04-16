// @flow

import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { Helmet } from 'react-helmet';

import type { WrappedFormUtils } from 'antd';

import { withContext, AUTH_STATUS } from '~/components/AppContext';

import type { Context } from '~/types/Context';

type Props = {
  form: WrappedFormUtils,
  appContext: Context, // this prop appears because of `withContext`
};

function LoginPage( props: Props ) {
  const {
    form: {
      validateFieldsAndScroll,
      getFieldDecorator,
    },
    appContext: {
      authStatus,
      login,
    },
  } = props;

  if ( authStatus === AUTH_STATUS.SUCCESS ) {
    return <Redirect to="/projects" />;
  }

  return (
    <>
      <Helmet title="Login" />
      <Form
        layout="vertical"
        onSubmit={ e => {
          e.preventDefault();

          validateFieldsAndScroll( ( err, values ) => {
            if ( !err ) {
              login( values.email, values.password );
            }
          } );
        } }
      >
        <Form.Item label="Email">
          { getFieldDecorator( 'email', {
            initialValue: 'hello',
            rules: [ { required: true, message: 'Please input your e-mail address' } ],
          } )(
            <Input />
          ) }
        </Form.Item>
        <Form.Item
          label="Password"
          validateStatus={ authStatus === AUTH_STATUS.FAIL ? 'error' : 'success' }
          help={ authStatus === AUTH_STATUS.FAIL ? 'Login failed - invalid email or password' : '' }
        >
          { getFieldDecorator( 'password', {
            initialValue: 'world',
            rules: [ { required: true, message: 'Please input your password' } ],
          } )(
            <Input type="password" />
          ) }
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={ authStatus === AUTH_STATUS.AUTHENTICATING }
        >
          Login
        </Button>
      </Form>
    </>
  );
}

export default withContext( Form.create()( LoginPage ) );
