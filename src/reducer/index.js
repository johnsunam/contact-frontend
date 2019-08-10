import { combineReducers } from 'redux';
import { currentUserReducer } from './currentUserReducer';
import { contactListReducer } from './contactListReducer';
export default combineReducers({
  currentUserReducer,
  contactListReducer
});