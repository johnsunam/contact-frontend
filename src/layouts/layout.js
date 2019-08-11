import React, { Component } from 'react';
import cookie from 'react-cookies';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import { Layout, Card, Col, Row } from 'antd';
import Header from '../components/common/header';
import { getCurrentUser } from '../actions/userAction';

const options = {
  lines: 13,
  length: 20,
  width: 10,
  radius: 30,
  scale: 1.00,
  corners: 1,
  color: '#000',
  opacity: 0.25,
  rotate: 0,
  direction: 1,
  speed: 1,
  trail: 60,
  fps: 20,
  zIndex: 2e9,
  top: '50%',
  left: '50%',
  shadow: false,
  hwaccel: false,
  position: 'absolute'
};

class CommonLayout extends Component {
  componentDidMount() {
    const userId = cookie.load('userId');
    this.props.currentUser.id || this.props.getCurrentUser(userId);
  }
  render() {
    return (<Layout className="layout">
            <Header />
            <div style={{ background: '#ECECEC', padding: '30px' }}>
              <Row gutter={16}>
                <Col span={8}>
                </Col>
                <Col span={8}>
                  {this.props.currentUser.id ? this.props.children : <Loader type="Puff" color="#00BFFF" height={100} width={100} />}
                </Col>
                <Col span={8}>
                </Col>
              </Row>
            </div>
          </Layout>)
  }
}
const mapStateToProps = store => ({
  currentUser: store.currentUserReducer, 
});
export default connect(mapStateToProps, { getCurrentUser })(CommonLayout);