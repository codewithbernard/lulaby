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

export const updateUser = (user, values) => async dispatch => {
    // Upload iamge to cloudinare
    let data = new FormData();
    data.append('upload_preset', 'snwikmyi');
    data.append('file', values.uploadImage.item(0))
    let res = await axios.post('https://api.cloudinary.com/v1_1/dypjti8qj/image/upload', data);
    if (res.data.url) {
      values.uploadImage = res.data.url;
      axios.put(`/api/users/${user.spotifyId}`, values);
    }
};
