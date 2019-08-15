import React, { Component } from 'react';
import { List, Avatar, Button, Skeleton, Modal } from 'antd';
import { connect } from 'react-redux';
import { getContacts, deleteContact } from '../../actions/contactAction';
import CreateContact from './createContact';

const { confirm } = Modal;

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      item: {}
    };
  }

  toggleModal = () => {
    this.setState({
      visible: !this.state.visible,
      item: {},
    })
  }
  

  componentDidMount() {
    this.props.getContacts();
  }

  showDeleteConfirm = (id) => {
    const self = this;
    confirm({
      title: 'Are you sure delete this contact?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        self.props.deleteContact(id);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  render() {
    const { list, loading } = this.props;
    return (
      <div>
      <h2>Contact List</h2>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (
          <List.Item
            actions={[<a key="list-loadmore-edit" onClick = {(e => this.setState({
              item: item,
              visible: true,
              }))}>edit</a>, <a key="list-loadmore-edit" onClick = {(e => this.showDeleteConfirm(item.id))}>delete</a>]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.contact_name}</a>}
                description={<div>
                <p>Email:  {item.email}</p>
                <p>Mobile Number:  {item.mob_number}</p>
                <p>Phone Number:  {item.phone_number}</p>
              </div>}
              />
            </Skeleton>
          </List.Item>
        )}
      />
      <Button type="primary" onClick={this.toggleModal} block>
      Add Contact
    </Button>
      <CreateContact visible={this.state.visible} key={this.state.item.id} {...this.state} toggleModal={this.toggleModal}/>
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  list: store.contactListReducer.list,
  loading: store.contactListReducer.isLoading,
});
export default connect(mapStateToProps, { getContacts, deleteContact })(ContactList);