import axios from 'axios';
import { FETCH_USERS, FETCH_USER } from './types';

export const fetchUsers = () => async dispatch => {
  const res = await axios.get('/api/users');
  dispatch({type: FETCH_USERS, payload: res.data });
}

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/auth/currentUser');
    dispatch({ type: FETCH_USER, payload: res.data });
};
