import React, { Component } from 'react';
import { Layout, Card, Col, Row } from 'antd';
import Header from '../components/common/header';
import { OmitProps } from 'antd/lib/transfer/renderListBody';

const CommonLayout = (props) => {
  return (<Layout className="layout">
          <Header />
          <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
              <Col span={8}>
              </Col>
              <Col span={8}>
                {props.children}
              </Col>
              <Col span={8}>
              </Col>
            </Row>
          </div>
        </Layout>)
}

export default CommonLayout;