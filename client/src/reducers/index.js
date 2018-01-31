import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

export default combineReducers({
  users: usersReducer,
  form: reduxForm,
  auth: authReducer
});
