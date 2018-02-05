import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import loadingReducer from './loadingReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  users: usersReducer,
  form: reduxForm,
  auth: authReducer,
  load: loadingReducer,
  message: messageReducer
});
