import axios from 'axios';
import { FETCH_USERS, FETCH_USER, INIT_LOADING, FINISH_LOADING } from './types';

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
      dispatch({type: INIT_LOADING});
      let data = new FormData();
      data.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);
      data.append('file', values.image.item(0))
      let res = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_ID}/image/upload`, data);
      values.image = res.data.url;
    }
    let res = await axios.put(`/api/users/${user}`, values);
    dispatch({type: FETCH_USER, payload: res.data });
    dispatch({type: FINISH_LOADING});
};

export const acceptFriendRequest = (user, friend) => async dispatch => {
  let tempUser = JSON.parse(JSON.stringify(user));
  // Remove friendRequest
  user.friendRequests = user.friendRequests.filter(user => user.spotifyId !== friend.spotifyId);
  // Add user to friends
  user.friends.push(friend);
  // Update on server
  let res = await axios.put(`/api/users/${user.spotifyId}`, user);
  friend.friends.push(tempUser);
  await axios.put(`/api/users/${friend.spotifyId}`, friend);
  axios.get(`/api/notify/${friend.spotifyId}`);
  // Dispatch new user
  dispatch({type: FETCH_USER, payload: res.data });
};
