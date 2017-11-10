import axios from 'axios';
import { FETCH_USERS } from './types';

export const fetchUsers = () => async dispatch => {
  const res = await axios.get('/api/users');
  dispatch({type: FETCH_USERS, payload: res.data });
}
