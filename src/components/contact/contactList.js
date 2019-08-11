import React, { Component } from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';
import { connect } from 'react-redux';
import { getContacts } from '../../actions/contactAction';


class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  

  componentDidMount() {
    console.log('this.props', this.props.getContacts())
  }

  render() {
    const { list, loading } = this.state;
    return (
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (
          <List.Item
            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.name.last}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <div>content</div>
            </Skeleton>
          </List.Item>
        )}
      />
    );
  }
}
const mapStateToProps = (store) => ({
  list: store.contactListReducer.list,
  loading: store.contactListReducer.isLoading,
});
export default connect(mapStateToProps, { getContacts })(ContactList);