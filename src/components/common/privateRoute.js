import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import cookie from 'react-cookies';
import Layout from '../../layouts/layout';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => 
      cookie.load('userId') ? (
        <Layout {...props}>
          <Component {...props}/>
        </Layout>
      ) : <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          /> }
  />
);