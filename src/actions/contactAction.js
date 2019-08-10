import { contactsApi, contactApi, deleteContactApi, updateContactApi, createContactApi } from '../api/ContactApi';

export const getContacts = () => (dispatch, getState) => {
  dispatch({
    type: 'FETCT_CONTACT_LIST_PROGRESS'
  });
  const userId = getState().currentUserReducer.id;
  return contactsApi(userId)
    .then(res => {
      console.log('resss', res);
    })
    .catch(err => {
      console.log(err)
    })
} 