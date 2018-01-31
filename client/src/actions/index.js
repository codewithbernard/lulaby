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
    // Upload iamge to cloudinare if new image was chosen
    if (values.image.item) {
      let data = new FormData();
      data.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);
      data.append('file', values.image.item(0))
      let res = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_ID}/image/upload`, data);
      values.image = res.data.url;
    }
    axios.put(`/api/users/${user}`, values);
};
