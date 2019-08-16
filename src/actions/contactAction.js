import { contactsApi, contactApi, deleteContactApi, updateContactApi, createContactApi } from '../api/ContactApi';

export const getContacts = () => (dispatch, getState) => {
  dispatch({
    type: 'FETCT_CONTACT_LIST_PROGRESS'
  });
  const userId = getState().currentUserReducer.id;
  return contactsApi(userId)
    .then(res => {
      dispatch({
        type: 'FETCH_CONTACT_LIST_SUCCESS',
        payload: res.data.data,
      });
    })
    .catch(err => {
      console.log(err)
    })
}

export const createContact = (data) => (dispatch, getState) => {
  return createContactApi(data)
    .then(res => {
      let contactList = [...getState().contactListReducer.list]
      let contact = res.data.data;
      contactList.push(contact);
      dispatch({
        type: 'FETCH_CONTACT_LIST_SUCCESS',
        payload: contactList,
      });
      return res.data;
    })
    .catch(err => {
      console.log('////',err);
    });
}

export const updateContact = (data) => (dispatch, getState) => {
  return updateContactApi(data)
    .then(res => {
      const resCont = res.data.data;
      let contactList = [...getState().contactListReducer.list];
      contactList.map((contact, i) => {
        if(contact.id == resCont.id) {
          contactList[i] = resCont;
        }
      });
      dispatch({
        type: 'FETCH_CONTACT_LIST_SUCCESS',
        payload: contactList,
      })
      return res.data;
    })
    .catch(err => {
      console.log('err///', err)
    })
}

export const deleteContact = (id) => (dispatch, getState) => {
  return deleteContactApi(id)
    .then(res => {
      let contactList = [];
      getState().contactListReducer.list.map(contact => {
        if(contact.id !== id) {
          contactList.push(contact);
        }
      });
      dispatch({
        type: 'FETCH_CONTACT_LIST_SUCCESS',
        payload: contactList,
      })
    })
    .catch(err => {
      console.log('err///', err)
    });
}
