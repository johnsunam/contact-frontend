import React, { Component } from 'react';
import { Button } from 'antd';
import ContactMoalForm from './contactModalForm';
import { } from '../../actions/contactAction';

class CreateContact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
    <ContactMoalForm visible={this.props.visible} onCancel={this.props.toggleModal}  {...this.props} />
  </div>
  }
}

export default CreateContact;