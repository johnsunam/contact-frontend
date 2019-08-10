import React, { Component } from 'react';
import { Layout, Card, Col, Row } from 'antd';
import FacebookLogin from 'react-facebook-login';
import cookie from 'react-cookies';

import Header from '../common/header';
import { login, getCurrentUser } from '../../actions/userAction';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
  }

  responseFacebook = (res) => {
    this.props.login(res)
      .then(res => {
        this.setState({loggedIn: true});
      })
  }
  componentDidMount() {
    const userId = cookie.load('userId');
    if(userId){
      this.props.getCurrentUser(userId)
        .then(res => {
          this.setState({loggedIn: true}) 
        })
        .catch(err => {
          this.setState({ loggedIn: false });
        })
    } else {
      this.setState({loggedIn: false})
    }
  }

  render() {
    return !this.state.loggedIn ? <Layout className="layout"><Header />
            <div style={{ background: '#ECECEC', padding: '30px' }}>
              <Row gutter={16}>
                <Col span={8}>
                </Col>
                <Col span={8}>
                  <Card title="Login with:" bordered={false}>
                    <FacebookLogin
                      appId="2378747232446844"
                      autoLoad={true}
                      fields="name,email,picture"
                      onClick={renderProps => <a onClick={renderProps.onClick}></a>}
                      callback={this.responseFacebook} />
                  </Card>
                </Col>
                <Col span={8}>
                </Col>
              </Row>
          </div>
        </Layout> : <Redirect to={{pathname : '/'}}/>
  }
}

export default connect(null, { login, getCurrentUser })(Login);