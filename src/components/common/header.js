import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import cookie from 'react-cookies';
import { connect } from 'react-redux';
import { logout } from '../../actions/userAction';
const { Header } = Layout;


const CommonHeader = (props) => <Header>
  <Row>
    <Col span={20} style={{ fontWeight: 'bold', color: 'white'}}>Contacts</Col>
    {props.currentUser.id ? <Col style={{ fontWeight: 'bold', color: 'white', cursor: 'pointer'}} span={4} onClick={(e => {
      cookie.remove('userId', { path: '/' });
      cookie.remove('token', { path: '/' });
      props.logout();
      props.history.push('/login');
    })}>Logout</Col> : ''}
  </Row>
</Header>;
const mapStateToProps = store => ({
  currentUser: store.currentUserReducer,
})
export default connect(mapStateToProps, { logout })(CommonHeader);