import { combineReducers } from 'redux';
import { currentUserReducer } from './currentUserReducer';
import { contactListReducer } from './contactListReducer';
import { errorReducer } from './errorReducer';

export default combineReducers({
  currentUserReducer,
  contactListReducer,
  errorReducer,
});