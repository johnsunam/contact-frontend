import React, { Component } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;


const CommonHeader = () => <Header><div className="logo" style={{ fontWeight: 'bold', color: 'white'}}>Contacts</div></Header>

export default CommonHeader;