import React, { Component } from 'react';
import { Modal, Form, Input, message } from 'antd';
import { connect } from 'react-redux';
import { createContact, updateContact } from '../../actions/contactAction';

class ContactModalForm extends Component {

  constructor(props) {
    super(props)
  }

  onCreate = e => {
    e.preventDefault();
    const self = this;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { name, email, mob_number, phone_number, country, city } = values;
        const address = { city, country };
        const userId = self.props.currentUser.id;

        if(self.props.item.id)
          self.props.updateContact({id: self.props.item.id, userId, name, email, mob_number, phone_number, address})
            .then(res => {
              self.props.form.resetFields();
              self.props.onCancel();
              message.success('Contact updated successfully!!!');
            })
            .catch(err => {
              console.log('err', err);
            })
        else
          self.props.createContact({userId, name, email, mob_number, phone_number, address})
            .then(res => {
              self.props.form.resetFields();
              self.props.onCancel();
              message.success('Contact created successfully!!!');
            })
            .catch(err => {
              console.log('err', err);
            });
      }
    });
  }

  render() {
    const { visible, onCancel, form } = this.props;
    const { getFieldDecorator } = form;
    return <Modal
    visible={visible}
    title="Create a new collection"
    okText={this.props.item.id ? "Update"  : "Create" }
    onCancel={onCancel}
    onOk={this.onCreate}
  >
    <Form layout="vertical">
      <Form.Item label="Name">
        {getFieldDecorator('name', {
          initialValue: this.props.item.contact_name,
          rules: [{ required: true, message: 'Please input the name of contact!' }],
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Email">
        {getFieldDecorator('email', {
          initialValue: this.props.item.email,
          rules: [
            {type: 'email', message: 'The input is not valid E-mail!'},
            { message: 'Please input the email of contact!' }
          ],
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Mobile Number">
        {getFieldDecorator('mob_number', {
          initialValue: this.props.item.mob_number,
          rules: [{ required: true, message: 'Please input the mobile number of contact!' }],
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Phone Number">
        {getFieldDecorator('phone_number', {
          initialValue: this.props.item.phone_number,
          rules: [{ message: 'Please input the phone number of contact!'}]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Country">
        {getFieldDecorator('country', {
          initialValue: this.props.item.address ? this.props.item.address.country : '',
          rules: [{ message: 'Please input the country of contact!'}]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="City">
        {getFieldDecorator('city', {
          initialValue: this.props.item.address ? this.props.item.address.city : '',
          rules: [{ message: 'Please input the city of contact!'}]
        })(<Input />)}
      </Form.Item>
    </Form>
  </Modal>
  }
}

const ContactForm = Form.create({ name: 'form_in_modal' })(ContactModalForm);
const mapStateToProps = store => ({ currentUser: store.currentUserReducer })
export default connect(mapStateToProps, { createContact, updateContact })(ContactForm);