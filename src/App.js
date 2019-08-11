import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Contact from './components/contact';
import { PrivateRoute } from './components/common/privateRoute';
import 'antd/dist/antd.css';

function App() {
  return (
    <Switch>
      <Route exact path="/login"  component={Login}/>
      <PrivateRoute exact path="/" component={Contact}/>
    </Switch>
  );
}

export default App;
